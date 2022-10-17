import { Router } from 'express';
import UsersController from '@controllers/UserController';
import AuthMiddleware from '@middlewares/AuthMiddleware';
const routes = Router();

routes.use(AuthMiddleware.guard);
routes.get('/', UsersController.list);
routes.get('/:id', UsersController.getById);

export default routes;
