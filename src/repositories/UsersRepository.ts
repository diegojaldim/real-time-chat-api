import User from '@entities/User';
import UsersModel from '@schemas/Users';

class UsersRepository {
  
  public async create(user: User): Promise<User> {
    return await UsersModel.create(user);
  }

}

export default UsersRepository;