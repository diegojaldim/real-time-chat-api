import UserRepository from '@repositories/UserRepository';
import User from '@entities/User';
import { compare } from 'bcrypt';
import jwt from 'jsonwebtoken';
import Auth from '@entities/Auth';

class AuthService {

  private readonly userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  public async login(email: string, password: string): Promise<Auth> {
    const user: User = await this.userRepository.findByEmailWithPassword(email);

    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    const isValidPassword = await compare(password, user.password);

    if (!isValidPassword) {
      throw new Error('Senha inválida');
    }

    user.password = undefined;

    const token = jwt.sign(
      { id: user.id },
      process.env.JWT_SECRET,
      { expiresIn: '1h'}
    );

    return new Auth({user, token});
  }

}

export default AuthService;