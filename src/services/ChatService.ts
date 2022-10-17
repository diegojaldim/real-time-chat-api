import Chat from '@entities/Chat';

class ChatService {

  public sendMessage(chat: Chat) {
    console.log('Send message -> ', chat);
  }


}

export default ChatService;