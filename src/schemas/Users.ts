import { Schema, model } from 'mongoose';
import UserInterface from '@interfaces/UserInterface';

const userSchema = new Schema<UserInterface>({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  avatar: String
});

export default model('Users', userSchema);