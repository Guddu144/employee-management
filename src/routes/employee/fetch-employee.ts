import { Request, Response } from 'express';
import employeeController from '../../controllers/employeeController';

export const fetchEmployee=async (req:Request, res:Response) => {
  try {
    const id = parseInt(req.params.id);
    const employee = await employeeController.getEmployeeById(id);
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch employee' });
  }
}
