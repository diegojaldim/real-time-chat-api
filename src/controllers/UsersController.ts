import {Request, Response} from 'express';
import Users from '@schemas/Users';

class UsersController {

  public async list(req: Request, res: Response): Promise<Response> {
    const users = await Users.find();
    return res.json(users);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const user = await Users.create(req.body);
    return res.json(user);
  }

  public async getById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const user = await Users.findById(id);
    return res.json(user);
  }

}

export default new UsersController();