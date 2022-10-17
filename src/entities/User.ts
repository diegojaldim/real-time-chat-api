import UserInterface from '@interfaces/UserInterface';
import { ObjectId } from 'mongoose';

class User implements UserInterface{

  id?: ObjectId;
  name: string;
  email: string;
  password: string;
  avatar?: string;

  constructor({
    name,
    email,
    password,
    avatar
  }: UserInterface) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.avatar = avatar;
  }

}

export default User;