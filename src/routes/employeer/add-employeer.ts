import { Request, Response } from 'express';
import { hashPassword } from '../../utils/bcrypt';
import employeerController from '../../controllers/employeerController';

export const addEmployeer = async (req: Request, res: Response): Promise<void> => {
    const {  address,email,name,phone,password } = req.body;
    const hashedPassword = await hashPassword(password)
    const { employeer, user } = await employeerController.createEmployeerAndUser(
      { address },
      { email, name, phone, password: hashedPassword }
    );
    res.status(201).json({employeer, user});
  
};
