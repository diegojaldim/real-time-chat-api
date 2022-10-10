import {
  Request,
  Response,
  NextFunction,
} from 'express';
import jwt from 'jsonwebtoken';

class AuthMiddleware {

  public guard(req: Request, res: Response, next: NextFunction): Response {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).send('Authentication required');
    }

    try {
      const token: string = authorization.split('Bearer ').pop();
      const isValidToken: Object = jwt.verify(token, '4d682ec4eed27c53849758bc13b6e179');
      console.log(isValidToken);
    } catch (err) {
      return res.status(401).send('Invalid token');
    }

    next();
  }

}

export default new AuthMiddleware();