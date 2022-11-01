import ChatInterface from '@interfaces/ChatInterface';
import mongoose from 'mongoose';

class Chat implements ChatInterface {

  recipient: mongoose.Types.ObjectId;
  sender: mongoose.Types.ObjectId;
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