import { CreateReportDTO } from '../entities/dto/createReport.dto';

export default interface ICountryExtractor {
  extract(value: CreateReportDTO): string | Promise<string>;
}
