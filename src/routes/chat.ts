import { Router } from 'express';
import ChatController from '@controllers/ChatController';
import AuthMiddleware from '@middlewares/AuthMiddleware';
import { sendMessage } from '@validators/ChatValidator';

const routes = Router();

routes.use(AuthMiddleware.guard);
routes.get(
  '/channel/:recipient',
  ChatController.channel
);
routes.post(
  '/send-message/:recipient',
  sendMessage,
  ChatController.sendMessage
);

export default routes;
