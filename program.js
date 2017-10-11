#!/usr/bin/env node

const program = require('commander');
const chalk = require('chalk');
const saria = require('./index');

program
  .version('0.1.0')
  .command('write <text> <secret>')
  .action((text, secret) => {
    const encryptedText = saria.encrypt(text, secret);

    console.log(chalk.green(encryptedText));
  });

program
  .version('0.1.0')
  .command('read <secret>')
  .action((secret) => {
    const decryptedText = saria.decrypt(secret);

    console.log(chalk.cyan(decryptedText));
  });


  program.parse(process.argv);