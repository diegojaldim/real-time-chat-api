import Chat from '@entities/Chat';
import ChatModel from '@schemas/Chat';

class ChatRepository {

  public create(chat: Chat): Promise<Chat> {
    return ChatModel.create(chat);
  }

}

export default ChatRepository;