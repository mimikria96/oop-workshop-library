import fs from 'fs';
import nock from 'nock';
import Weather from '../src/weather';


describe('Request', () => {
  const nockBody = () => JSON.stringify([{ title: 'Berlin', woeid: 638242 }]);
  nock('https://www.metaweather.com/api/location')
    .get('/search/?query=berlin')
    .reply(200, nockBody);
  it('nock test', async () => {
    const body = fs.readFileSync('./__tests__/__fixtures__/expected.json', 'utf8').toString();
    const request = () => ({ data: JSON.parse(body) });
    const weather = new Weather();
    const response = await weather.getWeather('berlin', 'metaWeather', request);
    const result = { humidity: 63, pressure: 1026.83 };
    expect({ humidity: response.humidity, pressure: response.pressure }).toEqual(result);
  });
});
