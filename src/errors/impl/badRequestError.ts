import CustomError from '../customError';

export default class BadRequestError extends CustomError {
  statusCode = 400;
  constructor(
    private readonly reason: string,
    private readonly field?: string
  ) {
    super(reason);
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  serializeErrors(): { message: string; field?: string }[] {
    return [{ message: this.reason, field: this.field }];
  }
}
