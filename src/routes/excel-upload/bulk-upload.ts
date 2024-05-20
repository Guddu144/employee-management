import { Request, Response } from 'express';
import { fetchXlsx } from '../../utils/fetchXlsx';

export const bulkUpload = async (req: Request, res: Response): Promise<void> => {
  try {
   if(req.file){
     const file= fetchXlsx(req.file.path)
     console.log(file)
    
     res.status(200).json(file)
   }else {
    res.status(400).json({ message: 'No file uploaded' });
  }

  } catch (error) {
    console.error('Error adding employee:', error);
    res.status(500).json({ message: 'Failed to add employee' });
  }
};
