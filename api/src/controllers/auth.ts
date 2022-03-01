import express from 'express';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import dotenv from 'dotenv';

/** Load config from .env file */
const dotenvResult = dotenv.config();

/** Handle config errors */
if (dotenvResult.error) {
  throw dotenvResult.error;
}

/** Get JWT secret from .env file */
const jwtSecret: string | undefined = process.env.JWT_SECRET;

/** Set token expiration timer */
const tokenExpirationInSeconds = 36000;

/**
 * The auth controller class
 *
 * @remarks
 * Contains the createJWT function
 */
class AuthController {
  /**
   * Creates a jwt token and returns an accessToken and a refreshToken
   *
   * @param req - express request
   * @param res - express response
   *
   * @returns Response with status and data on success
   */
  async createJWT(req: express.Request, res: express.Response) {
    try {
      const refreshId = req.body.userId + jwtSecret;
      const salt = crypto.createSecretKey(crypto.randomBytes(16));
      const hash = crypto
        .createHmac('sha512', salt)
        .update(refreshId)
        .digest('base64');
      req.body.refreshKey = salt.export();
      const token = jwt.sign(req.body, jwtSecret as string, {
        expiresIn: tokenExpirationInSeconds,
      });
      return res.status(200).send({ accessToken: token, refreshToken: hash });
    } catch (err) {
      return res.status(500).send();
    }
  }
}

export default new AuthController();
