import { Request, Response } from 'express';
import Users from '@schemas/Users';
import { compare } from 'bcrypt';
import jwt from 'jsonwebtoken';

class AuthController {

  constructor() {
    this.login = this.login.bind(this);
  }

  public async login(req: Request, res: Response): Promise<Response> {
    const {
      email,
      password,
    } = req.body;

    const user = await Users.findOne({email}).select('+password');

    if (!user) {
      return res.status(400).json({message: 'Usuário não encontrado'});
    }

    const isValidPassword = await compare(password, user.password);

    if (!isValidPassword) {
      return res.status(400).json({message: 'Senha inválida'});
    }

    user.password = undefined;
    const token = jwt.sign(
      { id: user.id },
      process.env.JWT_SECRET,
      { expiresIn: '1h'}
    );
    
    return res.send({user, token});
  }

}

export default new AuthController();