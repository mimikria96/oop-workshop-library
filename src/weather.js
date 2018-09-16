import fetch from 'node-fetch';
import Parsers from './parsers';

export default class Weather {
  constructor(service) {
    this.services = new Parsers();
    this.currentParser = service || 'default';
  }

  async getWeather(ip, service, httpClient = fetch) {
    if (service && !this.services.getParsers()[service]) {
      this.services.addParser(service);
    }
    return this.services.getParsers()[service || this.currentParser](ip, httpClient);
  }
}
