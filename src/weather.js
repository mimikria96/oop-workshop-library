import fetch from 'node-fetch';
import parseWeatherOne from './parsers/weatherOneParser';
import parseWeatherTwo from './parsers/weatherTwoParser';

export default class Weather {
  constructor(parser) {
    this.parsers = {
      metaWeatherOne: parseWeatherOne,
      metaWeatherTwo: parseWeatherTwo,
      default: parseWeatherOne,
    };
    this.currentParser = parser || 'default';
  }

  async getWeather(ip, parser, httpClient = fetch) {
    return this.parsers[parser || this.currentParser](ip, httpClient);
  }
}
