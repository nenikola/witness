import axios from 'axios';
import { CreateReportDTO } from '../../entities/dto/createReport.dto';
import ICountryExtractor from '../countryExtractor.interface';
export default class IpyfyIpCountryExtractor implements ICountryExtractor {
  async extract(reportInfo: CreateReportDTO) {
    const response = await axios.get(`${process.env.IPYFY_URL}/country`, {
      params: {
        apiKey: process.env.IPYFY_APIKEY,
        ipAddress: reportInfo.ipAddress,
      },
    });
    return response.data.location.country;
  }
}
