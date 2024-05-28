import { Request, Response } from 'express';
import userService from '../../services/userService';

export const fetchUsers=async (_req:Request, res:Response) => {
    const user = await userService.getUsers();
    res.status(200).json(user);
}
