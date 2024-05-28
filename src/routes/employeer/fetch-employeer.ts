import { Request, Response } from 'express';
import employeerService from '../../services/employeerService';

export const fetchEmployeer=async (req:Request, res:Response) => {
    const id = parseInt(req.params.id);
    const employee = await employeerService.getEmployeerById(id);
    res.status(200).json(employee);
}
