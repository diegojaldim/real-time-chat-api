import { Router } from 'express';
import users from '@routes/users';
import chat from '@routes/chat';

const routes = Router();

routes.use('/users', users);
routes.use('/chat', chat);

export default routes;