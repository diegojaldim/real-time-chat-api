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
      const user = jwt.verify(token, process.env.JWT_SECRET);
      req.body.user = user;
    } catch (err) {
      return res.status(401).send('Invalid token');
    }

    next();
  }

}

export default new AuthMiddleware();