import {NextFunction, Request,Response} from 'express';
import { verifyToken } from '../services/jwt';

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

export default async (req:Request, res:Response, next:NextFunction) => {
  const token = fetchToken(req);
  if (token) {
    const decoded = verifyToken(token);
    if (!decoded) {
      return res.status(403).json({ message:"Token doesnot match" });
    }
    next()
  }
  return res.status(401).json({ message:"No token found" });
};
