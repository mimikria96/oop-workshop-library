import nock from 'nock';
import fs from 'fs';
import getWeather from '../src/weather';


describe('Request', () => {
  it('nock test', async () => {
    const host = 'https://www.metaweather.com/api/location/';
    const result = `
2018-09-16: Heavy Cloud 21
2018-09-17: Heavy Cloud 22
2018-09-18: Heavy Cloud 23
2018-09-19: Heavy Cloud 24
2018-09-20: Light Rain 22
2018-09-21: Heavy Cloud 18`;
    const body = fs.readFileSync('./__tests__/__fixtures__/expected.json', 'utf8').toString();
    const ip = '44418';
    beforeEach(() => {
      nock(host)
        .get(ip)
        .reply(200, body);
    });
    const response = await getWeather(ip, 'metaWeatherTwo');
    expect(response).toBe(result);
  });
});
