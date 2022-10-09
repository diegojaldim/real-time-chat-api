import { Schema, model } from 'mongoose';

interface UserInterface {
  name: string;
  email: string;
  password: string;
  avatar?: string;
}

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