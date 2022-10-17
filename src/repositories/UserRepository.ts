import User from '@entities/User';
import UserModel from '@schemas/Users';

class UsersRepository {
  
  public async create(user: User): Promise<User> {
    return await UserModel.create(user);
  }

  public async getById(id: string): Promise<User> {
    return await UserModel.findById(id);
  }

  public async list(): Promise<Array<User>> {
    return await UserModel.find();
  }
}

export default UsersRepository;