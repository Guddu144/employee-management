import { Request, Response } from 'express';
import { fetchXlsx } from '../../utils/fetchXlsx';
import employeeController from '../../controllers/employeeController';
import { hashPassword } from '../../utils/bcrypt';

export const bulkUpload = async (req: Request, res: Response): Promise<void> => {
  try {
   if(req.file){
     const file= fetchXlsx(req.file.path)
     if(file){
      await Promise.all(file.map(async (employee: any) => {
      return await employeeController.createEmployeeAndUser(
        { 
          title: employee.title, 
          yearly_salary: employee.yearlySalary, 
          address: employee.address 
        },
        { 
          email: employee.email, 
          name: employee.name, 
          phone: employee.phone, 
          password:await hashPassword(employee.password )
        }
      );
    }));
    res.status(200).json({ message: 'Employees uploaded successfully' });
  }
   }else {
    res.status(400).json({ message: 'No file uploaded' });
  }

  } catch (error) {
    console.error('Error adding employee:', error);
    res.status(500).json({ message: 'Failed to add employee' });
  }
};
