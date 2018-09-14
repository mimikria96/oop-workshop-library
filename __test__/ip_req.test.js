import getInfoByIp from '../src';

describe('Request', () => {
  it('test 1', async () => {
    const ip = '134.234.3.2';
    const res = await getInfoByIp(ip);
    expect(res.city).toBe('Sierra Vista (Fort Huachuca)');
  });
});
