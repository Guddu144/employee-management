import { Request, Response } from 'express';
import employeeService from '../../services/employeeService';
import { AuthenticatedRequest } from '../../middleware/check-session';

export const updateEmployee = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
    const { title, yearly_salary, address,email,name,phone } = req.body;
    const id = parseInt(req.params.id);
    if(req.user){
     const userRole=req.user.role  
     const { updatedEmployee, updatedUser } = await employeeService.updateEmployee(
      id,
      userRole,
      { title, yearly_salary, address },
      { email, name, phone }
    );
    res.status(201).json({updatedEmployee, updatedUser});
  }

};
