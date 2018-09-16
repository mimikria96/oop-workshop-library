import fetch from 'node-fetch';
import parsers from './parsers';

export default class Weather {
  constructor(parser) {
    this.parsers = parsers();
    this.currentParser = parser || 'default';
  }

  async getWeather(ip, parser, httpClient = fetch) {
    return this.parsers[parser || this.currentParser](ip, httpClient);
  }
}
