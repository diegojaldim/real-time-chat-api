import { checkSchema } from 'express-validator';

export const sendMessage = checkSchema({
  message: {
    exists: true,
    errorMessage: 'Campo obrigatório',
  },
});