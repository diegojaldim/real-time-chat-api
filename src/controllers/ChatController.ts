import {
  Request,
  Response,
} from 'express';

class ChatController {

  public channel(req: Request, res: Response): Response {
    return res.json({chat: 'chat'});
  }

}

export default new ChatController();