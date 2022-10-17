import User from '@entities/User';
import UserModel from '@schemas/Users';

class UserRepository {
  
  public async create(user: User): Promise<User> {
    return await UserModel.create(user);
  }

  public async getById(id: string): Promise<User> {
    return await UserModel.findById(id);
  }

  public async list(): Promise<Array<User>> {
    return await UserModel.find();
  }

  public async findByEmailWithPassword(email: string): Promise<User> {
    return await UserModel.findOne({email}).select('+password');
  }
}

export default UserRepository;