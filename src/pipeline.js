import _ from 'lodash';
import fs from 'fs';

const getMiddle = (arr) => {
  const middle = arr.length / 2;
  return arr[middle];
};

const plural = (str, symbol) => {
  if (_.endsWith(str, 's')) {
    return str;
  }
  return `${str}${symbol}`;
};

const main = async () => {
  const file = await fs.readdir('.', (err, res) => {
    if (err) {
      throw Error(err);
    }
    return res;
  });
  return file
  |> (x => _.filter(x, str => _.startWith(str, '.')))
  |> _.sort
  |> getMiddle
  |> (x => plural(x, 's'))
  |> _.toUpper
  |> console.log;
};
export default main;
