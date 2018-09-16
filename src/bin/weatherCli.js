#!/usr/bin/env node

import program from 'commander';
import getWeather from '../weather';

program
  .version('0.1.0')
  .description('Return weather by ip')
  .arguments('<firstConfig>')
  .option('-f, --format [type]', 'Parse format', 'default')
  .action(async (firstConfig, type) => console.log(getWeather(firstConfig, type.format)))
  .parse(process.argv);
