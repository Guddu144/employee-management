import {NextFunction, Request,Response} from 'express';
import { verifyToken } from '../utils/jwt';
import { JwtPayload } from 'jsonwebtoken';

const fetchToken = (req:Request): string|undefined => {
  const authorizationHeader = req.headers?.authorization;
  if (authorizationHeader) {
    const token = authorizationHeader?.split(' ').at(-1);

    if (!token) {
      return undefined;
    }
    return token;
  }

};

interface AuthenticatedRequest extends Request {
  user?: string | JwtPayload;
}

export default async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const token = fetchToken(req);
  if (token) {
    try {
      const decoded = verifyToken(token);
      if (decoded) {
        req.user= decoded;
        return next();
      }
      return res.status(403).json({ message: "Invalid token" });
    } catch (error) {
      return res.status(403).json({ message: "Token verification failed" });
    }
  }
  return res.status(401).json({ message: "No token found" });
};
