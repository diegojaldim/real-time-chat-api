import User from '@entities/User';
import UsersRepository from '@repositories/UsersRepository';
import { hash } from 'bcrypt';

class UsersService {

  private readonly usersRepository: UsersRepository;

  constructor() {
    this.usersRepository = new UsersRepository();
  }

  public async create(user: User): Promise<User> {
    user.password = await hash(user.password, 10);

    const userModel = await this.usersRepository.create(user);
    userModel.password = undefined;

    return userModel;
  }

}

export default UsersService;