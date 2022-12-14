import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import routes from '@routes/routes';
import dotenv from 'dotenv';

class App {

  public express: express.Application;

  constructor () {
    this.express = express();

    dotenv.config();

    this.middlewares();
    this.database();
    this.routes();
  }

  private middlewares(): void {
    this.express.use(express.json());
    this.express.use(cors());
  }

  private database(): void {
    mongoose.connect('mongodb://localhost:27017/realtimechat');
  }

  private routes(): void {
    this.express.use(routes);
  }
}

export default new App().express;