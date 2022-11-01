import Chat from '@entities/Chat';
import ChatRepository from '@repositories/ChatRepository';

class ChatService {

  private readonly chatRepository: ChatRepository;

  constructor() {
    this.chatRepository = new ChatRepository();
  }

  public sendMessage(chat: Chat): Promise<Chat> {
    return this.chatRepository.create(chat);
  }

}

export default ChatService;