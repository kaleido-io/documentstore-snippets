'use strict';

const fs = require('fs');
const axios = require('axios');
const common = require('./common');

axios({
    url: common.DOCUMENT_STORE_API_ENDPOINT_DOCUMENTS + '/images/kaleido-logo.png',
    auth: {
      username: common.APP_CREDENTIAL_USER,
      password: common.APP_CREDENTIAL_PASSWORD
    },
    responseType: 'stream'
}).then(response => {
  response.data.pipe(fs.createWriteStream(__dirname + '/../resources/kaleido_downloaded.png'));
}).catch(err => {
  console.log('Failed to download document: ' + err);
});