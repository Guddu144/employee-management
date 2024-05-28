import { Request, Response } from 'express';
import employeeService from '../../services/employeeService';
import { hashPassword } from '../../utils/bcrypt';

export const addEmployee = async (req: Request, res: Response): Promise<void> => {
    const { title, yearly_salary, address,email,name,phone,password } = req.body;
    const hashedPassword = await hashPassword(password)
    const { employee, user } = await employeeService.createEmployeeAndUser(
      { title, yearly_salary, address },
      { email, name, phone, password: hashedPassword }
    );
    res.status(201).json({employee, user});
};
