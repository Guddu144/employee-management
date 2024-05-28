import { Request, Response } from 'express';
import employeeService from '../../services/employeeService';

export const fetchEmployees=async (_req:Request, res:Response) => {
    const employee = await employeeService.getEmployees();
    res.status(200).json(employee);
 
}
