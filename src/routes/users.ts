import { Router } from 'express';
import UsersController from '@controllers/UsersController';
import AuthMiddleware from '@middlewares/AuthMiddleware';
const routes = Router();

routes.use(AuthMiddleware.guard);
routes.get('/', UsersController.list);
routes.post('/', UsersController.create);
routes.get('/:id', UsersController.getById);

export default routes;
