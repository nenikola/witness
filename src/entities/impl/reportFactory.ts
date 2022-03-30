import IReport from '../report.interface';
import IReportFactory from '../reportFactory.interface';

export default class ReportFactory implements IReportFactory {
  constructor() {}

  makeReport(name: string, phoneNumber: string, country: string): IReport {
    const report = Object.freeze({
      getName: () => name,
      getPhoneNumber: () => phoneNumber,
      getCountry: () => country,
    });

    return report;
  }
}
