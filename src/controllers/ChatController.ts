import {
  Request,
  Response,
} from 'express';
import Chat from '@entities/Chat';
import ChatService from '@services/ChatService';
import mongoose from 'mongoose';

class ChatController {

  private readonly chatService: ChatService;

  constructor() {
    this.sendMessage = this.sendMessage.bind(this);
    this.chatService = new ChatService();
  }

  public sendMessage(req: Request, res: Response): Response {
    const {
      recipient
    } = req.params;

    const {
      user,
      message,
    } = req.body;

    this.chatService.sendMessage(new Chat({
      recipient: new mongoose.Types.ObjectId(recipient),
      sender: new mongoose.Types.ObjectId(user.id),
      message
    }));

    return res.send(201);
  }

  public channel(req: Request, res: Response): Response {
    console.log(req.body);
    return res.json({chat: 'chat'});
  }

}

export default new ChatController();