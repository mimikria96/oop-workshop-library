import _ from 'lodash';
import fetch from 'node-fetch';

const buildResponse = obj => _.reduce(obj.consolidated_weather,
  (acc, val) => `${acc}\n${val.applicable_date}: ${val.weather_state_name} ${Math.round(val.the_temp)}`, '');

export default async (ip, httpClient) => {
  try {
    const request = httpClient || fetch;
    const response = await request(`https://www.metaweather.com/api/location/${ip}/`);
    const json = response.json();
    return buildResponse(json);
  } catch (error) {
    return error;
  }
};
