import CustomError from '../customError';

export default class NotFoundError extends CustomError {
  statusCode = 404;
  constructor(private readonly entityName?: string) {
    super(`${entityName || ''} Not Found`);
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors(): { message: string; field?: string }[] {
    return [{ message: this.message }];
  }
}
