const fs = require('fs');
const CryptoJS = require('crypto-js');

const rootFile = '.saria';

function decrypt(secret) {
  return fs.readFileSync(rootFile, 'utf8')
    .toString()
    .split(/\r?\n/)
    .reduce((acc, curr) => {
      const text = CryptoJS.AES
        .decrypt(curr, secret)
        .toString(CryptoJS.enc.Utf8);

      if (!text) return acc;

      return acc + text + '\n';
    }, '');
}

function encrypt(text, secret) {
  const cipherText = CryptoJS.AES.encrypt(text, secret);

  fs.appendFileSync(rootFile, cipherText + '\n', 'utf8');

  return cipherText.toString();
}

module.exports = {
  encrypt,
  decrypt,
};
