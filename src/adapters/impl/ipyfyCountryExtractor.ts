import axios from 'axios';
import { CreateReportDTO } from '../../entities/dto/createReport.dto';
import ICountryExtractor from '../countryExtractor.interface';

const IPYFY_URL = process.env.IPYFY_URL;
if (!IPYFY_URL) {
  throw new Error('IPYFY_URL environment variable not set');
}
const IPYFY_APIKEY = process.env.IPYFY_APIKEY;
if (!IPYFY_APIKEY) {
  throw new Error('IPYFY_APIKEY environment variable not set');
}
export default class IpyfyIpCountryExtractor implements ICountryExtractor {
  async extract(reportInfo: CreateReportDTO) {
    const response = await axios.get(`${IPYFY_URL}/country`, {
      params: {
        apiKey: IPYFY_APIKEY,
        ipAddress: reportInfo.ipAddress,
      },
    });
    return response.data.location.country;
  }
}
