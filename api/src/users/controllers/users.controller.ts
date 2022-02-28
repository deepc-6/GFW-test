import express from 'express';
import argon2 from 'argon2';

import usersService from '../services/users.service';

class UsersController {
  async listUsers(req: express.Request, res: express.Response) {
    const users = await usersService.list(100, 0);
    res.status(200).send(users);
  }

  async getUserById(req: express.Request, res: express.Response) {
    const user = await usersService.readById(req.body.id);
    res.status(200).send(user);
  }

  async getUsername(req: express.Request, res: express.Response) {
    const username = res.locals.user;
    res.status(200).send(username);
  }

  async createUser(req: express.Request, res: express.Response) {
    req.body.password = await argon2.hash(req.body.password);
    const userId = await usersService.create(req.body);
    res.status(201).send({ id: userId });
  }
}

export default new UsersController();
