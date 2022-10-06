import express, { Express } from 'express';
import UsersController from '@controllers/UsersController';

const app: Express = express();

const users: UsersController = new UsersController();

app.get('/', users.list);

export default app;