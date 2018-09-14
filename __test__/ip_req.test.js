import GetInfoByIp from '../src';

describe('Request', () => {
  it('test 1', async () => {
    const ip = '134.234.3.2';
    const url = 'http://ip-api.com/json/';
    const userInfo = new GetInfoByIp(ip, url);
    const res = await userInfo.getLocation();
    expect(res.city).toBe('Sierra Vista (Fort Huachuca)');
  });
});
