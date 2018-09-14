import fetch from 'node-fetch';

const buildRes = async obj => ({ country: obj.country, city: obj.city, region: obj.regionName });

const getInfoByIp = async (ip) => {
  const getLocation = async (url) => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      return await buildRes(json);
    } catch (error) {
      return error;
    }
  };
  return getLocation(`http://ip-api.com/json/${ip}`);
};

export default getInfoByIp;
