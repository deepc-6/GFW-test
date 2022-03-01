import UsersDao from '../dao/users.dao';
import { CreateUserDto } from '../dto/create.user.dto';
import { CRUD } from '../../common/interfaces/crud.interface';

/**
 * The UsersService class
 *
 * @remarks
 * Contains the create, list, readById and getUserByUsernameWithPassword async functions
 */
class UsersService implements CRUD {
  /**
   * Creates a user
   *
   * @param user - user
   *
   * @returns addUser function from UsersDao
   */
  async create(user: CreateUserDto) {
    return UsersDao.addUser(user);
  }

  /**
   * Gets all users
   *
   * @param limit - limit
   * @param page - page
   *
   * @returns getUsers function from UsersDao
   */
  async list(limit: number, page: number) {
    return UsersDao.getUsers(limit, page);
  }

  /**
   * Gets a user by id
   *
   * @param id - userId
   *
   * @returns getUserById function from UsersDao
   */
  async readById(id: string) {
    return UsersDao.getUserById(id);
  }

  /**
   * Gets a user by username
   *
   * @param username - username
   *
   * @returns getUserByUsernameWithPassword function from UsersDao
   */
  async getUserByUsernameWithPassword(username: string) {
    return UsersDao.getUserByUsernameWithPassword(username);
  }
}

export default new UsersService();
