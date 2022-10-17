import AuthInterface from '@interfaces/AuthInterface';
import User from './User';

class Auth implements AuthInterface{
  user: User;
  token: string;

  constructor({
    user,
    token
  }: AuthInterface) {
    this.user = user;
    this.token = token;
  }

}

export default Auth;
