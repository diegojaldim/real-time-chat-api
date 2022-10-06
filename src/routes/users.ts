import { Router } from 'express';
import UsersController from '@controllers/UsersController';

const routes = Router();

routes.get('/', UsersController.list);

export default routes;
