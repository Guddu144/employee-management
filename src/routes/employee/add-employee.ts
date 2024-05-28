import { Request, Response } from 'express';
import employeeController from '../../controllers/employeeController';
import { hashPassword } from '../../utils/bcrypt';

export const addEmployee = async (req: Request, res: Response): Promise<void> => {
    const { title, yearly_salary, address,email,name,phone,password } = req.body;
    const hashedPassword = await hashPassword(password)
    const { employee, user } = await employeeController.createEmployeeAndUser(
      { title, yearly_salary, address },
      { email, name, phone, password: hashedPassword }
    );
    res.status(201).json({employee, user});
};
