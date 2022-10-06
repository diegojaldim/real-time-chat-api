import { Router } from 'express';
import UsersController from '@controllers/UsersController';

const routes = Router();

routes.get('/', UsersController.list);
routes.post('/', UsersController.create);
routes.get('/:id', UsersController.getById);

export default routes;
