#!/usr/bin/env node

import program from 'commander';
import Weather from '../weather';


program
  .version('0.1.0')
  .description('Get weather in the city.')
  .arguments('<City>')
  .option('-s, --service [name]', 'Weather service', 'openWeather')
  .action((city) => {
    const weather = new Weather();
    weather.getWeather(city, program.service).then((res) => {
      const result = `
      temp: ${res.temp}\n
      pressure: ${res.pressure}\n
      humidity: ${res.humidity}\n
      visibility: ${res.visibility}\n
      windSpeed: ${res.windSpeed}\n
      windDeg: ${res.windDeg}\n`;
      console.log(result);
    });
  })
  .parse(process.argv);
