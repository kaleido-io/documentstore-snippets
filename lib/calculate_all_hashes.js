'use strict';

const axios = require('axios');
const common = require('./common');

const ENDPOINT = common.DOCUMENT_STORE_API_ENDPOINT_DOCUMENTS.substr(0, common.DOCUMENT_STORE_API_ENDPOINT_DOCUMENTS.length - 10);

axios({
    method: 'post',
    url: ENDPOINT + '/sync_hashes?reset=true',
    auth: {
      username: common.APP_CREDENTIAL_USER,
      password: common.APP_CREDENTIAL_PASSWORD
    }
}).then(response => {
  console.log(response.data);
}).catch(err => {
  console.log('Failed to calculate all hashes: ' + err);
});