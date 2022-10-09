import { Router } from 'express';
import users from '@routes/users';
import chat from '@routes/chat';
import auth from '@routes/auth';

const routes = Router();

routes.use('/users', users);
routes.use('/chat', chat);
routes.use('/auth', auth);

export default routes;