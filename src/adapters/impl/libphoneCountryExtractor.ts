import ICountryExtractor from '../countryExtractor.interface';
import { parsePhoneNumber } from 'libphonenumber-js';
import { CreateReportDTO } from '../../entities/dto/createReport.dto';
export default class LibphoneCountryExtractor implements ICountryExtractor {
  async extract(reportInfo: CreateReportDTO) {
    const response = parsePhoneNumber(reportInfo.phoneNumber);
    return response.country;
  }
}
