import shortid from 'shortid';

import { CreateUserDto } from '../dto/create.user.dto';
import mongooseService from '../../common/services/mongoose.service';

class UsersDao {
  users: Array<CreateUserDto> = [];

  Schema = mongooseService.getMongoose().Schema;

  userSchema = new this.Schema(
    {
      _id: String,
      username: String,
      password: { type: String, select: false },
    },
    { id: false }
  );

  User = mongooseService.getMongoose().model('Users', this.userSchema);

  async addUser(userFields: CreateUserDto) {
    const userId = shortid.generate();
    const user = new this.User({
      _id: userId,
      ...userFields,
    });
    await user.save();
    return userId;
  }

  async getUserByUsername(username: string) {
    return this.User.findOne({ username }).exec();
  }

  async getUserByUsernameWithPassword(username: string) {
    const user = await this.User.findOne({ username })
      .select('_id username +password')
      .exec();
    return user;
  }

  async getUserById(userId: string) {
    return this.User.findOne({ _id: userId }).findOne({ _id: userId }).exec();
  }

  async getUsers(limit = 25, page = 0) {
    return this.User.find()
      .limit(limit)
      .skip(limit * page)
      .exec();
  }
}

export default new UsersDao();
