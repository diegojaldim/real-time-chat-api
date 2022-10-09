import { Router } from 'express';
import ChatController from '@controllers/ChatController';

const routes = Router();

routes.post('/channel', ChatController.channel);

export default routes;
