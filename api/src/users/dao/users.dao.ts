import shortid from 'shortid';

import { CreateUserDto } from '../dto/create.user.dto';
import mongooseService from '../../common/services/mongoose.service';

/**
 * The UsersDao class
 *
 * @remarks
 * Contains the user schema and the addUser, getUserByUsernameWithPassword,
 * getUserById and getUsers async functions
 */
class UsersDao {
  /** The array of users */
  users: Array<CreateUserDto> = [];

  /** Get schema from mongoose */
  Schema = mongooseService.getMongoose().Schema;

  /** Define user schema */
  userSchema = new this.Schema(
    {
      _id: String,
      username: String,
      password: { type: String, select: false },
    },
    { id: false }
  );

  /** Define User */
  User = mongooseService.getMongoose().model('Users', this.userSchema);

  /**
   * Saves a user to MongoDB and returns the id
   *
   * @param userFields - user fields based on create user dto
   *
   * @returns userId
   */
  async addUser(userFields: CreateUserDto) {
    const userId = shortid.generate();
    const user = new this.User({
      _id: userId,
      ...userFields,
    });
    await user.save();
    return userId;
  }

  /**
   * Finds a user by username
   *
   * @param username - username
   *
   * @returns user
   */
  async getUserByUsernameWithPassword(username: string) {
    const user = await this.User.findOne({ username })
      .select('_id username +password')
      .exec();
    return user;
  }

  /**
   * Finds a user by id
   *
   * @param userId - userId
   *
   * @returns user
   */
  async getUserById(userId: string) {
    return this.User.findOne({ _id: userId }).findOne({ _id: userId }).exec();
  }

  /**
   * Finds all users
   *
   * @param limit - limit
   * @param page - page
   *
   * @returns users
   */
  async getUsers(limit = 25, page = 0) {
    return this.User.find()
      .limit(limit)
      .skip(limit * page)
      .exec();
  }
}

export default new UsersDao();
