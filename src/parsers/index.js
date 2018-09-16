import parseWeatherOne from './weatherOneParser';
import parseWeatherTwo from './weatherTwoParser';

export default () => ({ metaWeatherOne: parseWeatherOne, metaWeatherTwo: parseWeatherTwo });
