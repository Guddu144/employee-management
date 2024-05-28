import { Request, Response } from 'express';
import employeerService from '../../services/employeerService';


export const deleteEmployeer = async (req:Request, res:Response) => {
    const id = parseInt(req.params.id);
    await employeerService.deleteEmployeer(id);
    res.status(204).json({msg: 'Employee deleted successfully'});
 
}
