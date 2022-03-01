import express from 'express';

import userService from '../services/users.service';

/**
 * The users middleware class
 *
 * @remarks
 * Contains the validateSameUsernameDoesntExist async function
 */
class UsersMiddleware {
  /**
   * Verifies if user already exists in DB
   *
   * @param req - express request
   * @param res - express response
   * @param next - express next function
   *
   * @returns Next() if user does not exist, Response with status 409 if user exists
   */
  async validateSameUsernameDoesntExist(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    const user = await userService.getUserByUsernameWithPassword(
      req.body.username
    );
    if (user) {
      res.status(409).send({ error: `Username already exists` });
    } else {
      next();
    }
  }
}

export default new UsersMiddleware();
