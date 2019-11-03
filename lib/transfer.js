'use strict';

const axios = require('axios');
const common = require('./common');

axios({
    method: 'post',
    url: common.DOCUMENT_STORE_API_ENDPOINT_TRANSFERS,
    auth: {
      username: common.APP_CREDENTIAL_USER,
      password: common.APP_CREDENTIAL_PASSWORD
    },
    data: {
      from: common.FROM_DESTINATION,
      to: common.TO_DESTINATION,
      document: '/images/kaleido-logo.png'
    }
}).then(response => {
  console.log(response.data);
}).catch(err => {
  console.log('Failed to delete document: ' + err);
});