import LibphoneNumberReportFactory from './impl/reportFactory';
import IReportFactory from './reportFactory.interface';

export const reportFactory: IReportFactory = new LibphoneNumberReportFactory();
