import ReportService from './impl/report.service';
import IReportService from './report.service.interface';

export const reportService: IReportService = new ReportService();
