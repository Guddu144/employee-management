import { Request, Response } from 'express';
import employeerController from '../../controllers/employeerController';


export const deleteEmployeer = async (req:Request, res:Response) => {
    const id = parseInt(req.params.id);
    await employeerController.deleteEmployeer(id);
    res.status(204).json({msg: 'Employee deleted successfully'});
 
}
