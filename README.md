IP Geo

```js
const ip = '134.234.3.2';
const url = 'http://ip-api.com/json/';
const userInfo = new GetInfoByIp(ip, url);
const Location = await userInfo.getLocation();
console.log(`из города ${Location.city}, в ${Location.region} ${Location.country}`)
// из города Sierra Vista (Fort Huachuca), в Arizona United States
```


<a href="https://codeclimate.com/github/codeclimate/codeclimate/maintainability"><img src="https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/maintainability" /></a>
<a href="https://codeclimate.com/github/codeclimate/codeclimate/test_coverage"><img src="https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/test_coverage" /></a>
[![Build Status](https://travis-ci.org/mimikria96/oop-workshop-library.svg?branch=master)](https://travis-ci.org/mimikria96/oop-workshop-library)
