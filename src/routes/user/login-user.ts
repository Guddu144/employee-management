import { NextFunction, Request, Response } from 'express';
import userService from '../../services/userService';
import { comparePassword } from '../../utils/bcrypt';
import { generateToken, verifyToken } from '../../utils/jwt';
import { ValidationFailedError } from '../../utils/errors';
const loginUser = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    const user = await userService.findUser(email);
    if (!user) {
      throw new ValidationFailedError('login failed', {
        'email': ['invalid credentials'],
        'password': ['invalid credentials'],
      });
    }

    const isPwdValid = await comparePassword(password, user.password.toString());
    if (!isPwdValid) {
      throw new ValidationFailedError('login failed', {
        'email': ['invalid credentials'],
        'password': ['invalid credentials'],
      });
    }

    const token = generateToken({ userId: user.id, email: user.email, role: user.role });
    
    return res.json({
      token,
      user:{
        userId: user.id,
        role: user.role,
        email: user.email,
      },
      message: 'User logged in successfully',
    });
 
};


export default loginUser;
