import IReport from './report.interface';

export default interface IReportFactory {
  makeReport(name: string, phoneNumber: string, country: string): IReport;
}
