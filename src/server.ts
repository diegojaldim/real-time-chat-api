import express, { Express } from 'express';
const app: Express = express();
import Routes from '@routes/Routes';

const routes: Express = Routes;

app.use('/', routes);

app.listen(3000);