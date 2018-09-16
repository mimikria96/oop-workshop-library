import getServices from './parsers';

export default class Weather {
  constructor(def = 'metaWeatherOne', services) {
    this.serviceName = def;
    this.services = services ? { ...getServices(), services } : getServices();
  }

  async getWeather(ip, service, httpClient) {
    console.log(this.services[service || this.serviceName]);
    return this.services[service || this.serviceName](ip, httpClient);
  }
}
