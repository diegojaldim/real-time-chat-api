import Chat from '@entities/Chat';
import ChatModel from '@schemas/Chat';
import { Types } from 'mongoose';

class ChatRepository {

  public create(chat: Chat): Promise<Chat> {
    return ChatModel.create(chat);
  }

  public async channel(
    recipient: Types.ObjectId,
    sender: Types.ObjectId
  ): Promise<Array<Chat>> {
    return await ChatModel
      .find({
        $or: [
          {
            recipient,
            sender
          },
          {
            recipient: sender,
            sender: recipient
          }
        ]
      })
      .sort({sentAt: 1})
      .limit(100);
  }

}

export default ChatRepository;