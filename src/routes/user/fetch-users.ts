import { Request, Response } from 'express';
import userController from '../../controllers/userController';

export const fetchUsers=async (_req:Request, res:Response) => {
    const user = await userController.getUsers();
    res.status(200).json(user);
}
