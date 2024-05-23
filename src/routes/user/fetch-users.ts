import { Request, Response } from 'express';
import userController from '../../controllers/userController';

export const fetchUsers=async (_req:Request, res:Response) => {
  try {
    const user = await userController.getUsers();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch user' });
  }
}
