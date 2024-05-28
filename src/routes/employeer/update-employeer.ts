import { Request, Response } from 'express';
import employeerService from '../../services/employeerService';

export const updateEmployeer = async (req: Request, res: Response): Promise<void> => {
    const {address,email,name,phone } = req.body;
    const id = parseInt(req.params.id);
    const { updatedEmployeer, updatedUser } = await employeerService.updateEmployeer(
      id,
      { address },
      { email, name, phone }
    );
    res.status(201).json({updatedEmployeer, updatedUser});
};
