import { Request, Response } from 'express';
import employeeController from '../../controllers/employeeController';
import { AuthenticatedRequest } from '../../middleware/check-session';

export const updateEmployee = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    const { title, yearly_salary, address,email,name,phone } = req.body;
    const id = parseInt(req.params.id);
    if(req.user){
     const userRole=req.user.role  
     const { updatedEmployee, updatedUser } = await employeeController.updateEmployee(
      id,
      userRole,
      { title, yearly_salary, address },
      { email, name, phone }
    );
    res.status(201).json({updatedEmployee, updatedUser});
  }
  } catch (error) {
    console.error('Error adding employee:', error);
    res.status(500).json({ message: 'Failed to add employee' });
  }
};
