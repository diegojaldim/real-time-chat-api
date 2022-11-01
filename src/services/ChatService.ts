import Chat from '@entities/Chat';
import User from '@entities/User';
import ChatRepository from '@repositories/ChatRepository';
import { Types } from 'mongoose';
import UserService from '@services/UserService';

class ChatService {

  private readonly chatRepository: ChatRepository;

  constructor() {
    this.chatRepository = new ChatRepository();
  }

  public async sendMessage(chat: Chat): Promise<Chat> {
    if (this.isSenderAndRecipientEquals(chat.recipient._id.toString(), chat.sender._id.toString())) {
      throw new Error('Não pode enviar mensagem para você mesmo!');
    }

    const isRecipientExists = await this.isUserExists(chat.recipient.toString());

    if (!isRecipientExists) {
      throw new Error('Destinatário não existente');
    }

    const isSenderExists = await this.isUserExists(chat.recipient.toString());
  
    if (!isSenderExists) {
      throw new Error('Remetente não existente');
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

  private isSenderAndRecipientEquals(recipient: string, sender: string): boolean {
    return sender === recipient;
  }

  private async isUserExists(userId: string): Promise<User> {
    const userService: UserService = new UserService();
    return await userService.getById(userId);
  }

}

export default ChatService;