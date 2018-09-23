## **Install**

Midule: `npm install --save oop-workshop-library`

## **Use**

**GetInfoByIp**

```js
import { GetInfoByIp } from 'oop-workshop-library';
const userInfo = new GetInfoByIp();
const response = await userInfo.getLocation(ip);
/* { country: countryName,
    city: cityName,
    region: regionName }
*/
```

**Weather**

Module:
```js
import { Weather } from 'oop-workshop-library';
const weather = new Weather();
const response = await weather.getWeather('berlin', service --optional);
```
Services:
 `openWeather - default,  
 metaWeather`  

You can add your custom service:
```js
const myService = (city) => {
  ...
}
const weather = new Weather({ serviceName: myService }, defaultService --optional);
const response = await weather.getWeather('berlin');
```
ClI: `npm install -g oop-workshop-library`
`getWeather city -s service`


<a href="https://codeclimate.com/github/codeclimate/codeclimate/maintainability"><img src="https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/maintainability" /></a>
<a href="https://codeclimate.com/github/codeclimate/codeclimate/test_coverage"><img src="https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/test_coverage" /></a>
[![Build Status](https://travis-ci.org/mimikria96/oop-workshop-library.svg?branch=master)](https://travis-ci.org/mimikria96/oop-workshop-library)
