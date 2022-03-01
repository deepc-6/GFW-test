import express from 'express';
import argon2 from 'argon2';

import usersService from '../services/users.service';

/**
 * The UsersController class
 *
 * @remarks
 * Contains the listUsers, getUserById, getUsername and createUser async functions
 */
class UsersController {
  /**
   * Finds all users and returns them
   *
   * @param req - express request
   * @param res - express response
   *
   * @returns Response with status and list of users
   */
  async listUsers(req: express.Request, res: express.Response) {
    const users = await usersService.list(100, 0);
    res.status(200).send(users);
  }

  /**
   * Finds a user by id and returns it
   *
   * @param req - express request
   * @param res - express response
   *
   * @returns Response with status and user
   */
  async getUserById(req: express.Request, res: express.Response) {
    const user = await usersService.readById(req.body.id);
    res.status(200).send(user);
  }

  /**
   * Gets the username from the response local variable
   *
   * @param req - express request
   * @param res - express response
   *
   * @returns Response with status and username
   */
  async getUsername(req: express.Request, res: express.Response) {
    const username = res.locals.user;
    res.status(200).send(username);
  }

  /**
   * Creates a user
   *
   * @param req - express request
   * @param res - express response
   *
   * @returns Response with status and _id
   */
  async createUser(req: express.Request, res: express.Response) {
    req.body.password = await argon2.hash(req.body.password);
    const userId = await usersService.create(req.body);
    res.status(201).send({ _id: userId });
  }
}

export default new UsersController();
