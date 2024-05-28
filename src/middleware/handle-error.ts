import { ErrorRequestHandler } from 'express';
import { CustomError, UnexpectedError, ValidationFailedError } from '../utils/errors';

const handleError: ErrorRequestHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  const payload: any = { failed: true, message: err.message };

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
