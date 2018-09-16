import fetch from 'node-fetch';
import _ from 'lodash';

const buildResponse = obj => _.reduce(obj.consolidated_weather,
  (acc, val) => `${acc}\n${val.applicable_date}: ${val.weather_state_name} ${Math.round(val.the_temp)}`, '');

export default async (ip) => {
  try {
    const response = await fetch(`https://www.metaweather.com/api/location/${ip}/`);
    const json = await response.json();
    return await buildResponse(json);
  } catch (error) {
    throw Error(error);
  }
};
