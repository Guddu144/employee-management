import { Request, Response } from 'express';
import employeeService from '../../services/employeeService';


export const deleteEmployee = async (req:Request, res:Response) => {
    const id = parseInt(req.params.id);
    await employeeService.deleteEmployee(id);
    res.status(204).json({msg: 'Employee deleted successfully'});
}
