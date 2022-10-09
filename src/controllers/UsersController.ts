import {Request, Response} from 'express';
import Users from '@schemas/Users';
import bcrypt from 'bcrypt';

class UsersController {

  public async list(req: Request, res: Response): Promise<Response> {
    const users = await Users.find();
    return res.json(users);
  }

  public async create(req: Request, res: Response) {
    try {
      const { password } = req.body;
      const crypt = await bcrypt.hash(password, 10);
      req.body.password = crypt;

      const user = await Users.create(req.body);

      return res.json(user);
    } catch (err) {
      console.log('err', err);
      return res.status(400).json({message: 'Erro ao registrar usuário'});
    }
  }

  public async getById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const user = await Users.findById(id);
    return res.json(user);
  }

}

export default new UsersController();