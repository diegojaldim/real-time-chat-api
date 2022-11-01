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
      recipient
    } = req.params;

    const {
      user,
      message,
    } = req.body;

    try {
      await this.chatService.sendMessage(new Chat({
        recipient: new mongoose.Types.ObjectId(recipient),
        sender: new mongoose.Types.ObjectId(user.id),
        message
      }));
    } catch (err) {
      console.error(err);
      return res.status(400).send({message: err.message});
    }

    return res.send(201);
  }

  public async channel(req: Request, res: Response): Promise<Response> {
    const {
      recipient,
    } = req.params;

    const {
      user,
    } = req.body;

    const messages = await this.chatService.channel(
      new mongoose.Types.ObjectId(recipient),
      new mongoose.Types.ObjectId(user.id)
    );

    return res.json({messages});
  }

}

export default new ChatController();