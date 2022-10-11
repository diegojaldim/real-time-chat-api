import { checkSchema } from 'express-validator';

export const register = checkSchema({
  email: {
    exists: true,
    errorMessage: 'Campo obrigatório',
    isEmail: {
      errorMessage: 'Insira um e-mail válido',
    }
  },
  password: {
    exists: true,
    errorMessage: 'Campo obrigatório',
    isLength: {
      options: { min: 6 },
      errorMessage: 'A senha deve ter no mínimo 6 caracteres'
    },
  }
});
