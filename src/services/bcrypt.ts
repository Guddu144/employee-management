import bcryptjs from 'bcryptjs';

export const hashPassword = async (plainText: string): Promise<string> => await bcryptjs.hash(plainText, 10);

export const comparePassword = async (plainText: string, hash: string): Promise<boolean> => {
  return await bcryptjs.compare(plainText, hash);
};
