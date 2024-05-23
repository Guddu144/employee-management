import { Request, Response } from 'express';
import employeeController from '../../controllers/employeeController';

export const fetchEmployees=async (_req:Request, res:Response) => {
  try {
    const employee = await employeeController.getEmployees();
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch employee' });
  }
}
