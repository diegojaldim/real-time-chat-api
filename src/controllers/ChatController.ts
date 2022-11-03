import {
  Request,
  Response,
} from 'express';
import Chat from '@entities/Chat';
import ChatService from '@services/ChatService';
import mongoose from 'mongoose';
import { validationResult } from 'express-validator';

class ChatController {

  private readonly chatService: ChatService;

  constructor() {
    this.sendMessage = this.sendMessage.bind(this);
    this.channel = this.channel.bind(this);
    this.chatService = new ChatService();
  }

  public async sendMessage(req: Request, res: Response): Promise<Response> {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      user,
      message,
    } = req.body;

    const sender = new mongoose.Types.ObjectId(user.id);
    const recipient = new mongoose.Types.ObjectId(req.params.recipient);
    const sentAt = new Date();

    try {
      await this.chatService.sendMessage(new Chat({
        recipient,
        sender,
        message,
        sentAt
      }));
    } catch (err) {
      console.error(err);
      return res.status(400).send({message: err.message});
    }

    return res.sendStatus(201);
  }

  public async channel(req: Request, res: Response): Promise<Response> {
    const {
      user,
    } = req.body;

    const sender = new mongoose.Types.ObjectId(user.id);
    const recipient = new mongoose.Types.ObjectId(req.params.recipient);
    let messages = [];

    try {
      messages = await this.chatService.channel(
        recipient,
        sender
      );
    } catch (err) {
      console.error(err);
      return res.status(400).send({message: err.message});
    }

    return res.json({messages});
  }

}

export default new ChatController();