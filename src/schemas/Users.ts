import { Schema, model } from 'mongoose';

interface UserInterface {
  name: string;
  email: string;
  avatar?: string;
}

const userSchema = new Schema<UserInterface>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  avatar: String
});

export default model('Users', userSchema);