import UsersDao from '../dao/users.dao';
import { CreateUserDto } from '../dto/create.user.dto';
import { CRUD } from '../../common/interfaces/crud.interface';

class UsersService implements CRUD {
  async create(resource: CreateUserDto) {
    return UsersDao.addUser(resource);
  }

  async list(limit: number, page: number) {
    return UsersDao.getUsers(limit, page);
  }

  async readById(id: string) {
    return UsersDao.getUserById(id);
  }

  async getUserByUsername(username: string) {
    return UsersDao.getUserByUsername(username);
  }

  async getUserByUsernameWithPassword(username: string) {
    return UsersDao.getUserByUsernameWithPassword(username);
  }
}

export default new UsersService();
