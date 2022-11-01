import Chat from '@entities/Chat';
import ChatRepository from '@repositories/ChatRepository';
import { Types } from 'mongoose';

class ChatService {

  private readonly chatRepository: ChatRepository;

  constructor() {
    this.chatRepository = new ChatRepository();
  }

  public sendMessage(chat: Chat): Promise<Chat> {
    if (this.isSenderAndRecipientEquals(chat.recipient._id.toString(), chat.sender._id.toString())) {
      throw new Error('Não pode enviar mensagem para você mesmo!');
    }

    return this.chatRepository.create(chat);
  }

  public async channel(
    recipient: Types.ObjectId,
    sender: Types.ObjectId
  ): Promise<Array<Chat>> {
    if (this.isSenderAndRecipientEquals(recipient._id.toString(), sender._id.toString())) {
      throw new Error('Não pode listar mensagens para você mesmo!');
    }

    return await this.chatRepository.channel(recipient, sender);
  }

  public isSenderAndRecipientEquals(recipient: string, sender: string): boolean {
    return sender === recipient;
  }
}

export default ChatService;