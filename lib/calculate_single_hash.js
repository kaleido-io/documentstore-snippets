'use strict';

const axios = require('axios');
const common = require('./common');

axios({
    method: 'patch',
    url: common.DOCUMENT_STORE_API_ENDPOINT_DOCUMENTS + '/images/kaleido-logo.png',
    auth: {
      username: common.APP_CREDENTIAL_USER,
      password: common.APP_CREDENTIAL_PASSWORD
    }
}).then(response => {
  console.log(response.data);
}).catch(err => {
  console.log('Failed to calculate hash: ' + err);
});