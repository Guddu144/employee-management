import { Request, Response } from 'express';
import userController from '../../controllers/userController';
import { comparePassword } from '../../services/bcrypt';
import { generateToken } from '../../services/jwt';
import { ValidationFailedError } from '../../services/errors';


const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await userController.findUser(email);
  if (!user) {
    return res.status(403).json(
      {errors:{
        email: 'Invalid email',
        password: 'Invalid password'
      },
      message:"login failed"}
    );
  }

  const isPwdValid = await comparePassword(password, user.password.toString());
  if (!isPwdValid) {
    return res.status(403).json(
      {errors:{
        email: 'Invalid email',
        password: 'Invalid password'
      },
      message:"login failed"}
    );
  }

  const token = generateToken({ userId: user.id,email: user.email,role:user.role});
  return res.json({
    token,
    message: 'User logged in successfully',
  });
};

export default loginUser;
