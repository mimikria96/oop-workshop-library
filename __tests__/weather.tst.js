import fs from 'fs';
import Weather from '../src/weather';


describe('Request', () => {
  it('nock test', async () => {
    const result = `
2018-09-15: Heavy Cloud 20
2018-09-16: Heavy Cloud 21
2018-09-17: Heavy Cloud 22
2018-09-18: Heavy Cloud 23
2018-09-19: Showers 24
2018-09-20: Heavy Cloud 22`;
    const body = fs.readFileSync('./__tests__/__fixtures__/expected.json', 'utf8').toString();
    const ip = '44418';
    const request = () => ({ json: () => JSON.parse(body) });
    const weather = new Weather('metaWeatherTwo');
    const response = await weather.getWeather(ip, 'metaWeatherOne', request);
    expect(response).toBe(result);
  });
});
