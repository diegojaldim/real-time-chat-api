import { Router } from 'express';
import AuthController from '@controllers/AuthController';
import {
  register,
  login,
} from '@validators/AuthValidator';

const routes = Router();

routes.post(
  '/login',
  login,
  AuthController.login
);

routes.post(
  '/register',
  register,
  AuthController.register
);

export default routes;