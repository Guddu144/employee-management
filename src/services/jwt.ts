import jwt, { JwtPayload } from 'jsonwebtoken';

export type UserPayload = {
  userId: number;
  email: string;
  role: string;
};

export const generateToken = (payload: UserPayload): string => {
  return jwt.sign(payload, "secret", {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

export const verifyToken = (token: string): UserPayload & JwtPayload | null => {
  try {
    return jwt.verify(token, "secret") as UserPayload;
  } catch (err) {
    return null;
  }
};
