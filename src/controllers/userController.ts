import { PrismaClient } from "@prisma/client";
import prisma from "../prisma/prisma";

class UserController{
  constructor(private prisma:PrismaClient) { }
  
  async findUser(email: string) {
    return await this.prisma.user.findUnique({
      where: { email },
      select: {
        id:true,
        email:true,
        password:true,
        role:true 
      }
    });
  } 

  
  
}

const userController = new UserController(prisma);

export default userController
