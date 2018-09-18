import fetch from 'node-fetch';

const buildResponse = obj => `${obj.weather.description}\ntemperature: ${obj.main.temp}\n`;

export default async (city, httpClient) => {
  try {
    const request = httpClient || fetch;
    const api = 'http://api.openweathermap.org/data/2.5/';
    const key = '&APPID=af85ac894f9ddf863e28168893b4747f';
    const response = await request(`${api}weather?q=${city}${key}`);
    const json = response.json();
    return buildResponse(json);
  } catch (error) {
    return error;
  }
};
