import '@babel/polyfill';
import axios from 'axios';


export default async (city, httpClient) => {
  try {
    const request = httpClient || axios;
    const api = 'https://www.metaweather.com/api/location/';
    const { data: [{ woeid }] } = await axios(`${api}search/?query=${city}`);
    const response = await request(`${api}${woeid}`);
    const {
      the_temp: temp,
      air_pressure: pressure,
      humidity,
      visibility,
      wind_speed: windSpeed,
      wind_speed: windDeg,
    } = response.data.consolidated_weather[0];
    const result = {
      temp,
      pressure,
      humidity,
      visibility,
      windSpeed,
      windDeg,
    };
    return result;
  } catch (error) {
    return error;
  }
};
