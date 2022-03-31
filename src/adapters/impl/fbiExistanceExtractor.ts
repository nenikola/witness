import axios from 'axios';
import NotFoundError from '../../errors/impl/notFoundError';
import IExistanceExtractor from '../existanceExtractor.interface';

const FBI_WANTED_BASE_URL = process.env.FBI_WANTED_BASE_URL;
if (!FBI_WANTED_BASE_URL) {
  throw new Error('FBI_WANTED_BASE_URL environment variable not set');
}
export default class FbiExistanceExtractor
  implements IExistanceExtractor<string, string[]>
{
  async extract(title: string): Promise<string[]> {
    const response = await axios.get(`${FBI_WANTED_BASE_URL}/list`, {
      params: {
        title,
      },
    });

    switch (response.data.total) {
      case 0:
        throw new NotFoundError('Report');
      default:
        return response.data.items.map((item) => item.title);
    }
  }
}
