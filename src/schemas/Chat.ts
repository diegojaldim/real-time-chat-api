import { Schema, model, Types } from 'mongoose';
import ChatInterface from '@interfaces/ChatInterface';

const chatSchema = new Schema<ChatInterface>({
  recipient: {
    type: Types.ObjectId,
    required: true
  },
  sender: {
    type: Types.ObjectId,
    required: true
  },
  message: {
    type: String,
    required: true,
  }
});

export default model('Chat', chatSchema);