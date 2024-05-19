import { Request, Response } from 'express';
import { hashPassword } from '../../services/bcrypt';
import employeerController from '../../controllers/employeerController';

export const addEmployeer = async (req: Request, res: Response): Promise<void> => {
  try {
    console.log(req.body)
    const {  address,email,name,phone,password } = req.body;
    const hashedPassword = await hashPassword(password)
    const { employeer, user } = await employeerController.createEmployeerAndUser(
      { address },
      { email, name, phone, password: hashedPassword }
    );
    res.status(201).json({employeer, user});
  } catch (error) {
    console.error('Error adding employee:', error);
    res.status(500).json({ message: 'Failed to add employee' });
  }
};
