import IExistanceExtractor from '../existanceExtractor.interface';
export default class MockExistanceExtractor
  implements IExistanceExtractor<string, string[]>
{
  extract(name: string) {
    return [name];
  }
}
