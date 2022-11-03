import ChatInterface from '@interfaces/ChatInterface';
import mongoose from 'mongoose';

class Chat implements ChatInterface {

  recipient: mongoose.Types.ObjectId;
  sender: mongoose.Types.ObjectId;
  message: string;
  sentAt: Date;

  constructor({
    recipient,
    sender,
    message,
    sentAt
  }: ChatInterface) {
    this.recipient = recipient;
    this.sender = sender;
    this.message = message;
    this.sentAt = sentAt;
  }

}

export default Chat;