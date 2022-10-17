import User from '@entities/User';

interface AuthInterface {
  user: User;
  token: string;
}

export default AuthInterface;