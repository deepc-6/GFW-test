import express from 'express';
import * as argon2 from 'argon2';

import usersService from '../../users/services/users.service';

/**
 * The auth middleware class
 *
 * @remarks
 * Contains the verifyUserPassword and checkUser functions
 */
class AuthMiddleware {
  /**
   * Finds a user and verifies the password with argon2
   *
   * @param req - express request
   * @param res - express response
   * @param next - express next function
   *
   * @returns Next() on success, Response with status 400 on error
   */
  async verifyUserPassword(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    const user: any = await usersService.getUserByUsernameWithPassword(
      req.body.username
    );
    if (user) {
      const passwordHash = user.password;
      if (await argon2.verify(passwordHash, req.body.password)) {
        req.body = {
          userId: user._id,
          username: user.username,
        };
        return next();
      }
    }
    return res
      .status(400)
      .send({ errors: ['Invalid username and/or password'] });
  }

  /**
   * Checks if user exists in response local variable
   *
   * @param req - express request
   * @param res - express response
   * @param next - express next function
   *
   * @returns Next()
   */
  async checkUser(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    const { username } = res.locals.jwt;

    if (username) {
      res.locals.user = username;
      next();
    } else {
      res.locals.user = null;
      next();
    }
  }
}

export default new AuthMiddleware();
