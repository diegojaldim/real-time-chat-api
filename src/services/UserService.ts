import User from '@entities/User';
import UserRepository from '@repositories/UserRepository';
import { hash } from 'bcrypt';

class UserService {

  private readonly userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  public async create(user: User): Promise<User> {
    user.password = await hash(user.password, 10);

    const userModel = await this.userRepository.create(user);
    userModel.password = undefined;

    return userModel;
  }

  public async getById(id: string): Promise<User> {
    return await this.userRepository.getById(id);
  }

  public async list(): Promise<Array<User>> {
    return await this.userRepository.list();
  }

}

export default UserService;