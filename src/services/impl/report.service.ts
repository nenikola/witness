import IReportService from '../report.service.interface';

import { reportFactory } from '../../entities';
import { countryExtractor, phoneNumberValidator } from '../../adapters';
import { reportRepository } from '../../repository';
import { existanceExtractor } from '../../adapters';
import { CreateReportDTO } from '../../entities/dto/createReport.dto';

export default class ReportService implements IReportService {
  async addReport(reportInfo: CreateReportDTO) {
    phoneNumberValidator.valid(reportInfo.phoneNumber);

    const existingReportsPromise = existanceExtractor.extract(reportInfo.name);
    const countryPromise = countryExtractor.extract(reportInfo);

    const [existingReports, country] = await Promise.all([
      existingReportsPromise,
      countryPromise,
    ]);

    const repositoryPromises = existingReports.map((reportName) => {
      const report = reportFactory.makeReport(
        reportName,
        reportInfo.phoneNumber,
        country
      );
      return reportRepository.save(report);
    });

    await Promise.all(repositoryPromises);
  }
}
