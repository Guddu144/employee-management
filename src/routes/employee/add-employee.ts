import { Request, Response } from 'express';
import employeeController from '../../controllers/employeeController';
import { hashPassword } from '../../services/bcrypt';

export const addEmployee = async (req: Request, res: Response): Promise<void> => {
  try {
    console.log(req.body)
    const { title, yearly_salary, address,email,name,phone,password } = req.body;
    const hashedPassword = await hashPassword(password)
    const { employee, user } = await employeeController.createEmployeeAndUser(
      { title, yearly_salary, address },
      { email, name, phone, password: hashedPassword }
    );
    res.status(201).json({employee, user});
  } catch (error) {
    console.error('Error adding employee:', error);
    res.status(500).json({ message: 'Failed to add employee' });
  }
};