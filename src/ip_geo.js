import fetch from 'node-fetch';

export class GetInfoByIp {
  constructor(ip, uri) {
    this.ip = ip;
    this.uri = uri;
  }
  // eslint-disable-next-line
  buildresponse(data) {
    return { country: data.country, city: data.city, region: data.regionName };
  }

  async getLocation() {
    try {
      const response = await fetch(`${this.uri}${this.ip}`);
      const json = await response.json();
      return await this.buildresponse(json);
    } catch (error) {
      return error;
    }
  }
}

export default GetInfoByIp;
