import { Request, Response } from 'express';
import { hashPassword } from '../../utils/bcrypt';
import employeerService from '../../services/employeerService';

export const addEmployeer = async (req: Request, res: Response): Promise<void> => {
    const {  address,email,name,phone,password } = req.body;
    const hashedPassword = await hashPassword(password)
    const { employeer, user } = await employeerService.createEmployeerAndUser(
      { address },
      { email, name, phone, password: hashedPassword }
    );
    res.status(201).json({employeer, user});
  
};
