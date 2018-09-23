import '@babel/polyfill';
import axios from 'axios';

export default async (city, httpClient) => {
  try {
    const request = httpClient || axios;
    const api = 'http://api.openweathermap.org/data/2.5/';
    const key = '&APPID=af85ac894f9ddf863e28168893b4747f';
    const response = await request(`${api}weather?q=${city}${key}`);
    const { main, visibility, wind } = response.data;
    const { temp, pressure, humidity } = main;
    const { speed, deg } = wind;
    const result = {
      temp,
      pressure,
      humidity,
      visibility,
      windSpeed: speed,
      windDeg: deg,
    };
    return result;
  } catch (error) {
    return error;
  }
};
