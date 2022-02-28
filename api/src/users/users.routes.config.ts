import express from 'express';
import { body } from 'express-validator';

import UsersController from './controllers/users.controller';
import UsersMiddleware from './middleware/users.middleware';
import { CommonRoutesConfig } from '../common/common.routes.config';
import BodyValidationMiddleware from '../common/middleware/body.validation.middleware';

export class UsersRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'UsersRoutes');
  }

  configureRoutes(): express.Application {
    this.app
      .route(`/`)
      .get(UsersController.listUsers)
      .post(
        body('username').not().isEmpty(),
        body('password')
          .isLength({ min: 6 })
          .withMessage('Must include password (6+ characters)'),
        BodyValidationMiddleware.verifyBodyFieldsErrors,
        UsersMiddleware.validateSameUsernameDoesntExist,
        UsersController.createUser
      );

    return this.app;
  }
}
