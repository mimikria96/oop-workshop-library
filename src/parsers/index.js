import parseWeatherOne from './weatherOneParser';
import parseWeatherTwo from './weatherTwoParser';

export default class Parsers {
  constructor() {
    this.parsers = {
      metaWeatherOne: parseWeatherOne,
      metaWeatherTwo: parseWeatherTwo,
      default: parseWeatherOne,
    };
  }

  getParsers() {
    return this.parsers;
  }

  addParser(obj) {
    this.parsers = { ...this.parsers, ...obj };
  }
}
