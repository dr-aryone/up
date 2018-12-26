#!/usr/bin/env node
'use strict';
const { createReadStream } = require('fs');
const got = require('got');
const ora = require('ora');
const meow = require('meow');
const FormData = require('form-data');

const { domain, apiKey } = require('./config');

const cli = meow(
  `
	Usage
    $ up <file> …

  Examples
	  $ up strangers.mp3
	  $ up sigrid.png
`,
  {
    flags: {
      help: {
        alias: 'h',
      },
      version: {
        alias: 'v',
      },
    },
  }
);

const file = cli.input[0];

process.on('SIGINT', () => {
  console.log('\n\nOperation aborted!');
  process.exit(1);
});

(async () => {
  if (file) {
    const form = new FormData();
    form.append('file', createReadStream(file));

    const spinner = ora(`Uploading ${file}…`).start();

    try {
      const response = await got(domain, {
        method: 'POST',
        headers: {
          'Content-Type': `multipart/form-data; boundary=${form._boundary}`,
          'api-key': apiKey,
        },
        body: form,
      });

      if (response.statusCode === 200) {
        spinner.succeed(`File uploaded... ${response.body}`);
      }
    } catch (error) {
      if (error.statusCode === 400)
        spinner.fail('Bad request, often due to missing parameter.');
      else if (error.statusCode === 401)
        spinner.fail('No valid API key provided');
      else if (error.statusCode === 404)
        spinner.fail("The requested resource doesn't exists");
      else spinner.fail('Unknown error', error.message);
    }
  } else {
    console.error('Specify a file to upload...');
    process.exit(1);
  }
})();
