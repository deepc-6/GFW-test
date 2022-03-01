import express from 'express';
import { body } from 'express-validator';

import UsersController from './controllers/users.controller';
import UsersMiddleware from './middleware/users.middleware';
import { CommonRoutesConfig } from '../common/common.routes.config';
import BodyValidationMiddleware from '../common/middleware/body.validation.middleware';

/**
 * The UsersRoutes class that extends the abstract class CommonRoutesConfig
 *
 * @remarks
 * Contains the configureRoutes function to configure the route for /
 */
export class UsersRoutes extends CommonRoutesConfig {
  /**
   * The constructor for the UsersRoutes class
   *
   * @param app - application
   */
  constructor(app: express.Application) {
    super(app, 'UsersRoutes');
  }

  /**
   * The configureRoutes function
   *
   * @remarks
   * Contains the route for /
   */
  configureRoutes(): express.Application {
    /**
     * The get and post methods for the url /
     *
     * @remarks
     * Calls the verifyBodyFieldsErrors, validateSameUsernameDoesntExist and createUser functions
     */
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
