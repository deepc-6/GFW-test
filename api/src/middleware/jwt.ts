import express from 'express';
import jwt from 'jsonwebtoken';

import { Jwt } from '../common/types/jwt';

/** Get JWT secret from .env file */
const jwtSecret: string | undefined = process.env.JWT_SECRET;

/**
 * The jwt middleware class
 *
 * @remarks
 * Contains the validJWTNeeded function
 */
class JwtMiddleware {
  /**
   * Verifies if the jwt token sent by client is valid
   *
   * @param req - express request
   * @param res - express response
   * @param next - express next function
   *
   * @returns Next() on success, Response with status 401 or 403 on error
   */
  validJWTNeeded(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    if (req.headers.authorization) {
      try {
        const authorization = req.headers.authorization.split(' ');
        if (authorization[0] !== 'Bearer') {
          return res.status(401).send();
        }
        res.locals.jwt = jwt.verify(
          authorization[1],
          jwtSecret as string
        ) as Jwt;
        return next();
      } catch (err) {
        return res.status(403).send();
      }
    } else {
      return res.status(401).send();
    }
  }
}

export default new JwtMiddleware();
