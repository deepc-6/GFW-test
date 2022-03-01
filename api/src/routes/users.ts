import express from 'express';
import { body } from 'express-validator';

import { CommonRoutesConfig } from './common';
import UserController from '../controllers/users';
import UserMiddleware from '../middleware/users';
import BodyValidationMiddleware from '../middleware/body.validation';

/**
 * The UserRoutes class that extends the abstract class CommonRoutesConfig
 *
 * @remarks
 * Contains the configureRoutes function to configure the route for /
 */
export class UserRoutes extends CommonRoutesConfig {
  /**
   * The constructor for the UserRoutes class
   *
   * @param app - application
   */
  constructor(app: express.Application) {
    super(app, 'UserRoutes');
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
      .get(UserController.listUsers)
      .post(
        body('username').not().isEmpty(),
        body('password')
          .isLength({ min: 6 })
          .withMessage('Must include password (6+ characters)'),
        BodyValidationMiddleware.verifyBodyFieldsErrors,
        UserMiddleware.validateSameUsernameDoesntExist,
        UserController.createUser
      );

    return this.app;
  }
}
