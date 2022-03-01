import UserDao from '../dao/users';
import UserDto from '../dto/users';
import { CRUD } from '../common/interfaces/crud.interface';

/**
 * The UserService class
 *
 * @remarks
 * Contains the create, list, readById and getUserByUsernameWithPassword async functions
 */
class UserService implements CRUD {
  /**
   * Creates a user
   *
   * @param user - user
   *
   * @returns addUser function from UsersDao
   */
  async create(user: UserDto) {
    return UserDao.addUser(user);
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
    return UserDao.getUsers(limit, page);
  }

  /**
   * Gets a user by id
   *
   * @param id - userId
   *
   * @returns getUserById function from UsersDao
   */
  async readById(id: string) {
    return UserDao.getUserById(id);
  }

  /**
   * Gets a user by username
   *
   * @param username - username
   *
   * @returns getUserByUsernameWithPassword function from UsersDao
   */
  async getUserByUsernameWithPassword(username: string) {
    return UserDao.getUserByUsernameWithPassword(username);
  }
}

export default new UserService();
