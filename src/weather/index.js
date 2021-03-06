import getServices from './parsers';

export default class Weather {
  constructor(services, def = 'openWeather') {
    this.serviceName = def;
    this.services = services ? { ...getServices(), ...services } : getServices();
  }

  async getWeather(ip, service, httpClient) {
    return this.services[service || this.serviceName](ip, httpClient);
  }
}
