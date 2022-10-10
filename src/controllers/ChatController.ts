import {
  Request,
  Response,
} from 'express';

class ChatController {

  public channel(req: Request, res: Response): Response {
    console.log(req.body);
    return res.json({chat: 'chat'});
  }

}

export default new ChatController();