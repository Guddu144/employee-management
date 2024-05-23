import userController from "../controllers/userController";
import { hashPassword } from "../utils/bcrypt";

const seedAdmin=async ()=>{
    try {
      let userData:any={
        email: "admin@gmail.com",
        name: "admin",
        phone: 9842367465,
      }
      const hashedPassword = await hashPassword("admin123")
      userData.password = hashedPassword
      const {user } = await userController.createAdmin(
        userData,
      );
      console.log(user,'Admin seeded successfully')
    } catch (error) {
      console.error('Error adding employee:', error);
    }
}

seedAdmin()
