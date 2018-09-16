import nock from 'nock';
import GetInfoByIp from '../src';


describe('Request', () => {
  it('nock test', async () => {
    const host = 'http://ip-api.com/json/';
    const city = 'Sierra Vista (Fort Huachuca)';
    const body = {
      as: 'AS1586 DoD Network Information Center',
      city: 'Sierra Vista (Fort Huachuca)',
      country: 'United States',
      countryCode: 'US',
      regionName: 'Arizona',
    };
    const ip = '134.234.3.2';
    beforeEach(() => {
      nock(host)
        .get(ip)
        .reply(200, body);
    });
    const userInfo = new GetInfoByIp();
    const response = await userInfo.getLocation(ip);
    expect(response.city).toBe(city);
  });
  it('dependency injection test', async () => {
    const diFetch = () => new Promise(resolve => resolve({ json: () => ({ city: 'Sierra Vista (Fort Huachuca)', country: 'United States' }) }));
    const userInfo = new GetInfoByIp();
    const response = await userInfo.getLocation('134.234.3.2', diFetch);
    expect(response.city).toBe('Sierra Vista (Fort Huachuca)');
  });
});
