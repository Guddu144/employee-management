import { NextFunction, Request, Response } from 'express';
import userController from '../../controllers/userController';
import { comparePassword } from '../../utils/bcrypt';
import { generateToken } from '../../utils/jwt';
import { ValidationFailedError } from '../../utils/errors';
const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;

    const user = await userController.findUser(email);
    if (!user) {
      throw new ValidationFailedError('login failed', {
        'username': ['invalid credentials'],
        'password': ['invalid credentials'],
      });
    }

    const isPwdValid = await comparePassword(password, user.password.toString());
    if (!isPwdValid) {
      throw new ValidationFailedError('login failed', {
        'username': ['invalid credentials'],
        'password': ['invalid credentials'],
      });
    }

    const token = generateToken({ userId: user.id, email: user.email, role: user.role });
    return res.json({
      token,
      message: 'User logged in successfully',
    });
  } catch (error) {
    next(error);
  }
};


export default loginUser;