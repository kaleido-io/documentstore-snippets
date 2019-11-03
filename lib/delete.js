'use strict';

const axios = require('axios');
const common = require('./common');

axios({
    method: 'delete',
    url: common.DOCUMENT_STORE_API_ENDPOINT_DOCUMENTS + '/images/kaleido-logo.png',
    auth: {
      username: common.APP_CREDENTIAL_USER,
      password: common.APP_CREDENTIAL_PASSWORD
    }
}).catch(err => {
  console.log('Failed to delete document: ' + err);
});