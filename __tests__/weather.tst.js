import fs from 'fs';
import nock from 'nock';
import Weather from '../src/weather';


describe('Request', () => {
  const nockBody = () => JSON.stringify([{ title: 'Berlinaa', woeid: 638242 }]);
  nock('https://www.metaweather.com/api/location')
    .get('/search/?query=berlin')
    .reply(200, nockBody);
  it('nock test', async () => {
    const result = `
2018-09-15: Heavy Cloud 20
2018-09-16: Heavy Cloud 21
2018-09-17: Heavy Cloud 22
2018-09-18: Heavy Cloud 23
2018-09-19: Showers 24
2018-09-20: Heavy Cloud 22`;
    const body = fs.readFileSync('./__tests__/__fixtures__/expected.json', 'utf8').toString();
    const request = () => ({ json: () => JSON.parse(body) });
    const weather = new Weather();
    const response = await weather.getWeather('berlin', 'metaWeather', request);
    expect(response).toBe(result);
  });
});
