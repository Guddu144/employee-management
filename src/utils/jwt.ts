import jwt, { JwtPayload } from 'jsonwebtoken';

const JWT_SECRET_TOKEN=process.env.JWT_SECRET_TOKEN as string;

export type UserPayload = {
  userId: number;
  email: string;
  role: string;
};

export const generateToken = (payload: UserPayload): string => {
  return jwt.sign(payload, JWT_SECRET_TOKEN, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

export const verifyToken = (token: string): UserPayload & JwtPayload | null => {
  try {
    return jwt.verify(token, JWT_SECRET_TOKEN) as UserPayload;
  } catch (err) {
    return null;
  }
};
