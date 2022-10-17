import {Request, Response} from 'express';
import UserService from '@services/UserService';

class UsersController {

  private readonly userService: UserService;

  constructor() {
    this.getById = this.getById.bind(this);
    this.list = this.list.bind(this);

    this.userService = new UserService();
  }

  public async list(req: Request, res: Response): Promise<Response> {
    const users = await this.userService.list();
    return res.json(users);
  }

  public async getById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      const user = await this.userService.getById(id);

      return res.json(user);
    } catch (err) {
      console.error(err);
      return res.status(500).send({msg: 'Erro ao recuperar usuário'});
    }
  }

}

export default new UsersController();