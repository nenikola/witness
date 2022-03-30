import IReport from '../entities/report.interface';
import FilestoreRepository from './impl/filestoreRepository';
import IRepository from './repository.interface';

export const reportRepository: IRepository<IReport> = new FilestoreRepository();
