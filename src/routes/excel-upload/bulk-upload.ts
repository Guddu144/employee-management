// bulkUploadHandler.ts
import { Request, Response } from 'express';
import { fetchXlsx } from '../../utils/fetchXlsx';
import { fileUploadQueue } from '../../utils/redisConfig';

export const bulkUpload = async (req: Request, res: Response): Promise<void> => {
  try {
    if (req.file) {
      const file = fetchXlsx(req.file.path);
      await fileUploadQueue.add("upload-file-data", { file });
      res.status(200).json({ message: 'File uploaded and processing started' });
    } else {
      res.status(400).json({ message: 'No file uploaded' });
    }
  } catch (error) {
    console.error('Error adding employee:', error);
    res.status(500).json({ message: 'Failed to add employee' });
  }
};
