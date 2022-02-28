import express from 'express';
import { body } from 'express-validator';
import { CommonRoutesConfig } from '../common/common.routes.config';
import authController from './controllers/auth.controller';
import authMiddleware from './middleware/auth.middleware';
import jwtMiddleware from './middleware/jwt.middleware';
import BodyValidationMiddleware from '../common/middleware/body.validation.middleware';
import UsersController from '../users/controllers/users.controller';

export class AuthRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'AuthRoutes');
  }

  configureRoutes(): express.Application {
    this.app.post(`/login`, [
      body('username').not().isEmpty(),
      body('password')
        .isLength({ min: 6 })
        .withMessage('Must include password (6+ characters)'),
      BodyValidationMiddleware.verifyBodyFieldsErrors,
      authMiddleware.verifyUserPassword,
      authController.createJWT,
    ]);

    this.app.post(`/me`, [
      jwtMiddleware.validJWTNeeded,
      authMiddleware.checkUser,
      UsersController.getUsername,
    ]);

    return this.app;
  }
}
