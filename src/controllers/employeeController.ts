import { PrismaClient } from "@prisma/client";
import prisma from "../prisma/prisma";

class EmployeeController{


  constructor(private prisma:PrismaClient) { }
  
  async createEmployeeAndUser(employeeData: { title: string; yearly_salary: number; address: string }, userData: { email: string; name: string; phone: string; password: string }) {
    try {
      return await this.prisma.$transaction(async (prisma) => {
        const user = await prisma.user.create({
          data: {
            email: userData.email,
            name: userData.name,
            phone: JSON.stringify(userData.phone),
            role: 'EMPLOYEE',
            password: userData.password, 
          },
        });

        const employee = await prisma.employee.create({
          data: {
            userId:user.id,
            ...employeeData
          },
        });


        return { employee, user };
      });
    } catch (error) {
      console.error("Error creating employee and user:", error);
      throw new Error("Failed to create employee and user");
    }
  }

  async getEmployeeById(id: number) {
    return await this.prisma.employee.findUnique({
      where: { userId:id },
      include: {
        user: true 
      }
    });
  }

  async updateEmployee(id:number,employeeData: { title: string; yearly_salary: number; address: string }, userData: { email: string; name: string; phone: string}) {
    try {
      return await this.prisma.$transaction(async (prisma) => {
        const updatedEmployee = await prisma.employee.update({
          where: { userId:id },
          data: employeeData,
        });

        const updatedUser = await prisma.user.update({
          where: { id },
          data: {
            email: userData.email,
            name: userData.name,
            phone: userData.phone,
          },
        });

        return { updatedEmployee, updatedUser };
      });
    } catch (error) {
      console.error("Error creating employee and user:", error);
      throw new Error("Failed to create employee and user");
    }
  }


  async deleteEmployee(id: number) {
    try {
      return await this.prisma.$transaction(async (prisma) => {
        
        await prisma.employee.delete({
          where: { userId:id },
        });

        return await prisma.user.delete({
          where: { id  }, 
        });
      });
    } catch (error) {
      console.error(`Error deleting employee with id ${id}:`, error);
      throw new Error("Failed to delete employee");
    }
  }
  
}

const employeeController = new EmployeeController(prisma);

export default employeeController
