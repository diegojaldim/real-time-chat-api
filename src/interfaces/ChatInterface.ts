import mongoose from "mongoose";

interface ChatInterface {
  recipient: mongoose.Types.ObjectId;
  sender: mongoose.Types.ObjectId;
  message: string;
  sentAt: Date;
}

export default ChatInterface;