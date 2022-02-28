import express from 'express';
import jwt from 'jsonwebtoken';
import * as argon2 from 'argon2';
import usersService from '../../users/services/users.service';
import jwtMiddleware from './jwt.middleware';
import dotenv from 'dotenv';

const dotenvResult = dotenv.config();

if (dotenvResult.error) {
  throw dotenvResult.error;
}

// @ts-expect-error
const jwtSecret: string = process.env.JWT_SECRET;

class authMiddleware {
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
    res.status(400).send({ errors: ['Invalid username and/or password'] });
  }

  async checkUser(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    const username  = res.locals.jwt.username;

    if (username) {  
      res.locals.user = username;
      next();
    } else {
      res.locals.user = null;
      next();
    }
  }
}

export default new authMiddleware();