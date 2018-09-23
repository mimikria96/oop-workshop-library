import parseWeatherOne from './weatherOne';
import parseWeatherTwo from './weatherTwo';

export default () => ({ openWeather: parseWeatherOne, metaWeather: parseWeatherTwo });
