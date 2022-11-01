import Chat from '@entities/Chat';
import ChatRepository from '@repositories/ChatRepository';
import { Types } from 'mongoose';

class ChatService {

  private readonly chatRepository: ChatRepository;

  constructor() {
    this.chatRepository = new ChatRepository();
  }

  public sendMessage(chat: Chat): Promise<Chat> {
    return this.chatRepository.create(chat);
  }

  public async channel(
    recipient: Types.ObjectId,
    sender: Types.ObjectId
  ): Promise<Array<Chat>> {
    return await this.chatRepository.channel(recipient, sender);
  }
}

export default ChatService;