import _ from 'lodash';
import fetch from 'node-fetch';

const buildResponse = obj => _.reduce(obj.consolidated_weather,
  (acc, val) => `${acc}\n${val.applicable_date}: ${val.weather_state_name} ${Math.round(val.the_temp)}`, '');

export default async (city, httpClient) => {
  try {
    const request = httpClient || fetch;
    const api = 'https://www.metaweather.com/api/location/';
    const woeidResponse = await fetch(`${api}search/?query=${city}`);
    const [{ woeid }] = await woeidResponse.json();
    const response = await request(`${api}${woeid}`);
    const json = response.json();
    return buildResponse(json);
  } catch (error) {
    return error;
  }
};
