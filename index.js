const fs = require('fs');
const CryptoJS = require('crypto-js');

const rootFile = '.saria';

function fetchFileContents() {
  return fs.readFileSync(rootFile, 'utf8')
    .toString();
}

function decrypt(secret) {
  return fetchFileContents()
    .split(/\r?\n/)
    .reduce((acc, curr) => {
      const text = CryptoJS.AES
        .decrypt(curr, secret)
        .toString(CryptoJS.enc.Utf8);

      return acc + text + '\n';
    }, '');
}

function encrypt(text, secret) {
  const cipherText = CryptoJS.AES.encrypt(text, secret);

  fs.appendFileSync(rootFile, cipherText + '\n', 'utf8');

  return cipherText;
}

// const text = 'apple';
// const secret = 'blueberry';

// const encrypted = encrypt(text, secret);

// const decrypted = decrypt(secret);

// console.log(decrypted);