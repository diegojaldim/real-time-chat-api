import { Router } from 'express';
import ChatController from '@controllers/ChatController';
import AuthMiddleware from '@middlewares/AuthMiddleware';

const routes = Router();

routes.use(AuthMiddleware.guard);
routes.post('/channel', ChatController.channel);

export default routes;
