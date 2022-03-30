import { isValidPhoneNumber } from 'libphonenumber-js';
import IValidator from '../validator.interface';
import BadRequestError from '../../errors/impl/badRequestError';

export default class LibPhoneNumberValidator implements IValidator<string> {
  valid(number: string) {
    if (isValidPhoneNumber(number)) {
      return;
    }
    throw new BadRequestError('Not valid', 'phoneNumber');
  }
}
