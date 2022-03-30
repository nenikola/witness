import IValidator from '../../entities/validator.interface';
import IReport from '../report.interface';

export default class MockPhoneNumberValidator implements IValidator<IReport> {
  valid(report: IReport) {
    if (report.getPhoneNumber() === '+381606175919') {
      return;
    }
    throw new Error('Phone number invalid');
  }
}
