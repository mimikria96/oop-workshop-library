import '@babel/polyfill';
import axios from 'axios';

export default class GetInfoByIp {
  // eslint-disable-next-line
  buildresponse(data) {
    return { country: data.country, city: data.city, region: data.regionName };
  }

  async getLocation(ip, httpClient) {
    try {
      const request = httpClient || axios;
      const response = await request(`http://ip-api.com/json/${ip}`);
      return this.buildresponse(response.data);
    } catch (error) {
      throw Error(error);
    }
  }
}
