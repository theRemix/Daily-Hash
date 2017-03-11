const CryptoJS = require('../lib/crypto-js.min');

const zeroPad = num => ("0"+num).slice(-2);

const getGMT = _ => {
  let now = new Date();
  return `${now.getUTCFullYear()}${zeroPad(now.getUTCMonth()+1)}${zeroPad(now.getUTCDate())}`;
};

const generate = salt => CryptoJS.SHA1(getGMT()+salt+'\n').toString();

export const Hash = {
  generate
};
