import HttpStatusCodes from 'http-status-codes';

export abstract class CustomError extends Error {
  public readonly httpStatus = HttpStatusCodes.BAD_REQUEST;

  constructor(msg: string, httpStatus: number) {
    super(msg);
    this.httpStatus = httpStatus;
  }
}

export class UnexpectedError extends CustomError {
  public static readonly status = HttpStatusCodes.INTERNAL_SERVER_ERROR;

  constructor(msg = 'an unexpected error occurred') {
    super(msg, UnexpectedError.status);
  }
}

export class UnauthorizedError extends CustomError {
  public static readonly msg = 'you are not authorized to view this page';
  public static readonly status = HttpStatusCodes.UNAUTHORIZED;

  constructor(msg: string = UnauthorizedError.msg) {
    super(msg, UnauthorizedError.status);
  }
}

export class ForbiddenError extends CustomError {
  public static readonly msg = 'invalid permissions to view this page';
  public static readonly status = HttpStatusCodes.FORBIDDEN;

  constructor(msg: string = ForbiddenError.msg) {
    super(msg, ForbiddenError.status);
  }
}

export class NotFoundError extends CustomError {
  public static readonly msg = '404 not found';
  public static readonly status = HttpStatusCodes.NOT_FOUND;

  constructor(msg: string = NotFoundError.msg) {
    super(msg, NotFoundError.status);
  }
}

export interface ExtractedErrorsType {
  [key: string]: string[];
}

export class ValidationFailedError extends CustomError {
  public static readonly msg = '422 Validation Failed';
  public static readonly status = HttpStatusCodes.UNPROCESSABLE_ENTITY;

  constructor(msg = '422 Validation Failed', public errors: ExtractedErrorsType) {
    super(msg, ValidationFailedError.status);
  }
}




