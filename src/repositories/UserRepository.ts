import User from '@entities/User';
import UserModel from '@schemas/Users';

class UsersRepository {
  
  public async create(user: User): Promise<User> {
    return await UserModel.create(user);
  }

}

export default UsersRepository;