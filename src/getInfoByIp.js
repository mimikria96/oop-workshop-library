import fetch from 'node-fetch';

export class GetInfoByIp {
  // eslint-disable-next-line
  buildresponse(data) {
    return { country: data.country, city: data.city, region: data.regionName };
  }

  async getLocation(ip, httpClient) {
    try {
      const slave = httpClient || fetch;
      const response = await slave(`http://ip-api.com/json/${ip}`);
      const json = await response.json();
      return await this.buildresponse(json);
    } catch (error) {
      throw Error(error);
    }
  }
}

export default GetInfoByIp;
