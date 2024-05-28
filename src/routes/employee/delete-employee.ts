import { Request, Response } from 'express';
import employeeController from '../../controllers/employeeController';


export const deleteEmployee = async (req:Request, res:Response) => {
    const id = parseInt(req.params.id);
    await employeeController.deleteEmployee(id);
    res.status(204).json({msg: 'Employee deleted successfully'});
}
