import nock from 'nock';
import GetInfoByIp from '../src/infoByIp';


describe('Request', () => {
  const host = 'http://ip-api.com/json';
  const body = {
    as: 'AS1586 DoD Network Information Center',
    city: 'Sierra Vista (Fort Huachuca)',
    country: 'United States',
    countryCode: 'US',
    regionName: 'Arizona',
  };
  const ip = '134.234.3.2';
  nock(host)
    .get(`/${ip}`)
    .reply(200, body);

  it('nock test', async () => {
    const city = 'Sierra Vista (Fort Huachuca)';
    const userInfo = new GetInfoByIp();
    const response = await userInfo.getLocation(ip);
    expect(response.city).toBe(city);
  });
  it('dependency injection test', async () => {
    const diAxios = () => new Promise(resolve => resolve({ data: { city: 'Sierra Vista (Fort Huachuca)', country: 'United States' } }));
    const userInfo = new GetInfoByIp();
    const response = await userInfo.getLocation(ip, diAxios);
    expect(response.city).toBe('Sierra Vista (Fort Huachuca)');
  });
});
