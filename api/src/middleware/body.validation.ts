import express from 'express';
import { validationResult } from 'express-validator';

/**
 * The middleware class to validate the body
 *
 * @remarks
 * Contains the verifyBodyFieldsErrors function
 */
class BodyValidationMiddleware {
  /**
   * Checks for validation errors in the body fields
   *
   * @param req - express request
   * @param res - express response
   * @param next - express next function
   *
   * @returns Next() on success, Response with status 400 on error
   */
  verifyBodyFieldsErrors(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }
    return next();
  }
}

export default new BodyValidationMiddleware();
