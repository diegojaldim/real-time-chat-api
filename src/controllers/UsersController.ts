import {Request, Response} from 'express';
import Users from '@schemas/Users';

class UsersController {

  public async list(req: Request, res: Response): Promise<Response> {
    const users = await Users.find();
    console.log('users:', users);

    return res.json({message: 'List users lkasjlajsdlkj'});
  }

}

export default new UsersController();