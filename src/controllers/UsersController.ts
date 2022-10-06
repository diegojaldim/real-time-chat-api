import { Users } from "@models/Users";
import {Request, Response} from 'express';

export default class UsersController {

  list(req: Request, res: Response): Response {
    return res.json({message: 'List users'});
  }

}