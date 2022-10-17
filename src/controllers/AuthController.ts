import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import UserService from '@services/UserService';
import User from '@entities/User';
import AuthService from '@services/AuthService';
import Auth from '@entities/Auth';

class AuthController {

  private readonly userService: UserService;

  constructor() {
    this.register = this.register.bind(this);
    this.userService = new UserService();
  }

  public async login(req: Request, res: Response): Promise<Response> {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      email,
      password,
    } = req.body;

    try {
      const authService: AuthService = new AuthService();
      const auth: Auth = await authService.login(email, password);

      return res.send(auth);
    } catch (err) {
      console.error(err);
      return res.status(400).send({message: err.message});
    }
  }

  public async register(req: Request, res: Response): Promise<Response> {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      name,
      email,
      password
    } = req.body;

    const user = await this.userService.create(new User({
      name,
      email,
      password
    }));

    return res.send(user);
  }

}

export default new AuthController();