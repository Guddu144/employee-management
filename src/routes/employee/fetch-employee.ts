import { Request, Response } from 'express';
import employeeService from '../../services/employeeService';

export const fetchEmployee=async (req:Request, res:Response) => {
    const id = parseInt(req.params.id);
    const employee = await employeeService.getEmployeeById(id);
    res.status(200).json(employee);
  
}
