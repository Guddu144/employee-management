import { Request, Response } from 'express';
import employeerController from '../../controllers/employeerController';

export const fetchEmployeer=async (req:Request, res:Response) => {
  try {
    const id = parseInt(req.params.id);
    const employee = await employeerController.getEmployeerById(id);
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch employee' });
  }
}
