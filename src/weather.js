import parseWeatherOne from './parsers/weatherOneParser';
import parseWeatherTwo from './parsers/weatherTwoParser';

const parsers = {
  metaWeatherOne: parseWeatherOne,
  metaWeatherTwo: parseWeatherTwo,
  default: parseWeatherOne,
};

export default async (ip, parser) => {
  console.log(parsers[parser]);
  return parsers[parser](ip);
};
console.log('aa');
