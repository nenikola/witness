import IExistanceExtractor from './existanceExtractor.interface';
import FbiExistanceExtractor from './impl/fbiExistanceExtractor';
import IpyfyCountryExtractor from './impl/ipyfyCountryExtractor';
import LibPhoneNumberValidator from './impl/libphoneNumberValidator';
import ICountryExtractor from './countryExtractor.interface';
import IValidator from './validator.interface';
import LibphoneCountryExtractor from './impl/libphoneCountryExtractor';

export const countryExtractor: ICountryExtractor =
  new LibphoneCountryExtractor();
// export const countryExtractor: ICountryExtractor = new IpyfyCountryExtractor();
export const existanceExtractor: IExistanceExtractor<string, string[]> =
  new FbiExistanceExtractor();

export const phoneNumberValidator: IValidator<string> =
  new LibPhoneNumberValidator();
