import ChatInterface from '@interfaces/ChatInterface';
import { Schema } from 'mongoose';

class Chat implements ChatInterface {

  recipient: string;
  sender: string;
  message: string;

  constructor({
    recipient,
    sender,
    message
  }: ChatInterface) {
    this.recipient = recipient;
    this.sender = sender;
    this.message = message;
  }

}

export default Chat;