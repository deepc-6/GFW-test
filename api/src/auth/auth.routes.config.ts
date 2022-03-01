import express from 'express';
import { body } from 'express-validator';

import { CommonRoutesConfig } from '../common/common.routes.config';
import authController from './controllers/auth.controller';
import AuthMiddleware from './middleware/auth.middleware';
import jwtMiddleware from './middleware/jwt.middleware';
import BodyValidationMiddleware from '../common/middleware/body.validation.middleware';
import UsersController from '../users/controllers/users.controller';

/**
 * The AuthRoutes class that extends the abstract class CommonRoutesConfig
 *
 * @remarks
 * Contains the configureRoutes function to configure the routes for /login and /me
 */
export class AuthRoutes extends CommonRoutesConfig {
  /**
   * The constructor for the AuthRoutes class
   *
   * @param app - application
   */
  constructor(app: express.Application) {
    super(app, 'AuthRoutes');
  }

  /**
   * The configureRoutes function
   *
   * @remarks
   * Contains the routes for /login and /me
   */
  configureRoutes(): express.Application {
    /**
     * The /login post method
     *
     * @remarks
     * Calls the verifyBodyFieldsErrors, verifyUserPassword and createJWT functions
     *
     * @param url - url field
     * @param body - express validated body field
     */
    this.app.post(`/login`, [
      body('username').not().isEmpty(),
      body('password')
        .isLength({ min: 6 })
        .withMessage('Must include password (6+ characters)'),
      BodyValidationMiddleware.verifyBodyFieldsErrors,
      AuthMiddleware.verifyUserPassword,
      authController.createJWT,
    ]);

    /**
     * The /me post method
     *
     * @remarks
     * Calls the validJWTNeeded, checkUser and getUsername functions
     *
     * @param url - url field
     * @param body - express validated body field
     */
    this.app.post(`/me`, [
      jwtMiddleware.validJWTNeeded,
      AuthMiddleware.checkUser,
      UsersController.getUsername,
    ]);

    return this.app;
  }
}
