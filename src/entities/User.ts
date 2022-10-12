import UserInterface from '@interfaces/UserInterface';

class User implements UserInterface{

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