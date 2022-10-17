import { Router } from 'express';
import ChatController from '@controllers/ChatController';
import AuthMiddleware from '@middlewares/AuthMiddleware';

const routes = Router();

routes.use(AuthMiddleware.guard);
routes.get('/channel', ChatController.channel);
routes.post('/send-message/:recipient', ChatController.sendMessage);

export default routes;
