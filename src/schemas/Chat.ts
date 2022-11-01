import { Schema, model } from 'mongoose';
import ChatInterface from '@interfaces/ChatInterface';

const chatSchema = new Schema<ChatInterface>({
  recipient: {
    type: Schema.Types.ObjectId,
    required: true
  },
  sender: {
    type: Schema.Types.ObjectId,
    required: true
  },
  message: {
    type: String,
    required: true,
  }
});

export default model('Chat', chatSchema);