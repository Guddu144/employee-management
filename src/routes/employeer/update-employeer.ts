import { Request, Response } from 'express';
import employeerController from '../../controllers/employeerController';

export const updateEmployeer = async (req: Request, res: Response): Promise<void> => {
  try {
    console.log(req.body)
    const {address,email,name,phone } = req.body;
    const id = parseInt(req.params.id);
    const { updatedEmployeer, updatedUser } = await employeerController.updateEmployeer(
      id,
      { address },
      { email, name, phone }
    );
    res.status(201).json({updatedEmployeer, updatedUser});
  } catch (error) {
    console.error('Error adding employee:', error);
    res.status(500).json({ message: 'Failed to add employee' });
  }
};
