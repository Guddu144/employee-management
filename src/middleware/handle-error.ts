import express, { ErrorRequestHandler } from 'express';
import { CustomError, ExtractedErrorsType, UnexpectedError, ValidationFailedError } from '../utils/errors';

interface JsonResponse {
  failed: boolean;
  message: string;
  errors?: ExtractedErrorsType;
}

const handleError: ErrorRequestHandler = async (
  err:Error,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  const payload: JsonResponse = { failed: true, message: err.message };

  if (!(err instanceof CustomError) || err instanceof UnexpectedError) {
    console.error(err);
  }

  if (err instanceof ValidationFailedError) {
    payload.errors = err.errors;
    return res.status(err.httpStatus).json(payload);
  }

  if (err instanceof CustomError) {
    return res.status(err.httpStatus).json(payload);
  }

  console.error(err);
  return res.status(500).json({ failed: true, message: 'Internal Server Error' });
};

export default handleError;


