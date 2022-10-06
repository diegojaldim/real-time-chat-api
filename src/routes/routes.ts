import { Router } from 'express';
import users from '@routes/users';

const routes = Router();

routes.use('/users', users);

export default routes;