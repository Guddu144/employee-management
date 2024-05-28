import { Request, Response } from 'express';
import employeerController from '../../controllers/employeerController';

export const updateEmployeer = async (req: Request, res: Response): Promise<void> => {
    const {address,email,name,phone } = req.body;
    const id = parseInt(req.params.id);
    const { updatedEmployeer, updatedUser } = await employeerController.updateEmployeer(
      id,
      { address },
      { email, name, phone }
    );
    res.status(201).json({updatedEmployeer, updatedUser});
};
