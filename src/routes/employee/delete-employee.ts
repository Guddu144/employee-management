import { Request, Response } from 'express';
import employeeController from '../../controllers/employeeController';


export const deleteEmployee = async (req:Request, res:Response) => {
  try {
    const id = parseInt(req.params.id);
    await employeeController.deleteEmployee(id);
    res.status(204).json({msg: 'Employee deleted successfully'});
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete employee' });
  }
}
