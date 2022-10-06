import express, { Express } from 'express';
import UsersRoutes from '@routes/UsersRoutes';

const app: Express = express();

app.use('/users', UsersRoutes);

export default app;