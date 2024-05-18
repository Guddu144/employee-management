import { PrismaClient } from "@prisma/client";
import prisma from "../prisma/prisma";

class EmployeeController{


  constructor(private prisma:PrismaClient) { }

  async createEmployee(data: { name: string; position: string }) {
    return await this.prisma.employee.create({
      data,
    });
  }

  // Method to get an employee by ID
  async getEmployeeById(id: number) {
    return await this.prisma.employee.findUnique({
      where: { id },
    });
  }

  // Method to update an employee
  async updateEmployee(id: number, data: { name?: string; position?: string }) {
    return await this.prisma.employee.update({
      where: { id },
      data,
    });
  }

  // Method to delete an employee
  async deleteEmployee(id: number) {
    return await this.prisma.employee.delete({
      where: { id },
    });
  }



  
}

const employeeController = new EmployeeController(prisma);

export default employeeController
