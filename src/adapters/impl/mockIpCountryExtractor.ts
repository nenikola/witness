import IIpCountryExtractor from '../ipCountryExtractor.interface';
export default class MockIpCountryExtractor implements IIpCountryExtractor {
  extract(ipAddress: string) {
    return 'USA';
  }
}
