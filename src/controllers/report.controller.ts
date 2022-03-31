import { reportService } from '../services';
import { CreateReportDTO } from '../entities/dto/createReport.dto';
import CustomError from '../errors/customError';
import Request from './request';
import Response from './response';
import { logger } from '../../utils/logger';

export default class ReportController {
  async postReport(request: Request): Promise<Response> {
    const reportInfo: CreateReportDTO = new CreateReportDTO(
      request.ip,
      request.body.phoneNumber,
      request.body.name
    );

    try {
      await reportService.addReport(reportInfo);
      return {
        statusCode: 201,
      };
    } catch (error) {
      logger.error(error);
      if (error instanceof CustomError) {
        return {
          statusCode: error.statusCode,
          body: error.serializeErrors(),
        };
      } else {
        return {
          statusCode: 500,
          body: { message: 'An unknown error occurred' },
        };
      }
    }
  }
}
