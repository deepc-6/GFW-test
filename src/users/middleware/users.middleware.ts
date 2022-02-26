import express from 'express';
import userService from '../services/users.service';

class UsersMiddleware {
  async validateRequiredUserBodyFields(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    if (req.body && req.body.username && req.body.password) {
      next();
    } else {
      res.status(400).send({
        error: `Missing required fields username and password`,
      });
    }
  }

  async validateSameUsernameDoesntExist(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    const user = await userService.getUserByUsername(req.body.username);
    if (user) {
      res.status(400).send({ error: `Username already exists` });
    } else {
      next();
    }
  }

  async validateSameUsernameBelongToSameUser(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    if (res.locals.user._id === req.params.userId) {
      next();
    } else {
      res.status(400).send({ error: `Invalid username` });
    }
  }

  async validateUserExists(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    const user = await userService.readById(req.params.userId);

    if (user) {
      res.locals.user = user;
      next();
    } else {
      res.status(404).send({
          error: `User ${req.params.userId} not found`,
      });
    }
  }

  async extractUserId(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    req.body.id = req.params.userId;
    next();
  }
}

export default new UsersMiddleware();