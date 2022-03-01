import express from 'express';
import * as http from 'http';
import * as winston from 'winston';
import * as expressWinston from 'express-winston';
import cors from 'cors';
import debug from 'debug';

import { CommonRoutesConfig } from './common/common.routes.config';
import { AuthRoutes } from './auth/auth.routes.config';
import { UsersRoutes } from './users/users.routes.config';

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port = 3000;
const routes: Array<CommonRoutesConfig> = [];
const log: debug.IDebugger = debug('app:mongoose-service');

/** add middleware to parse all incoming requests as JSON */
app.use(express.json());

/** add middleware to allow cross-origin requests */
app.use(cors());

/**
 * prepare the expressWinston logging middleware configuration,
 * which will automatically log all HTTP requests handled by Express.js
 */
const loggerOptions: expressWinston.LoggerOptions = {
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
    winston.format.json(),
    winston.format.prettyPrint(),
    winston.format.colorize({ all: true })
  ),
};

/** when not debugging, log requests as one-liners */
if (!process.env.DEBUG) {
  loggerOptions.meta = false;
}

/** initialize the logger with the above configuration */
app.use(expressWinston.logger(loggerOptions));

/**
 * add the routes to array, after sending the Express.js
 * application object to have the routes added to app
 */
routes.push(new AuthRoutes(app));
routes.push(new UsersRoutes(app));

/** a simple route to make sure everything is working properly */
const runningMessage = `Server running at http://localhost:${port}`;

/** get the base URL for the app */
app.get('/', (req: express.Request, res: express.Response) => {
  res.status(200).send(runningMessage);
});

/** start the server */
server.listen(port, () => {
  routes.forEach((route: CommonRoutesConfig) => {
    log(`Routes configured for ${route.getName()}`);
  });
  /** message to know when the server is done starting up */
  log(runningMessage);
});
