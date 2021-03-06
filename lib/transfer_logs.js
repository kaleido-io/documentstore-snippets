'use strict';

const axios = require('axios');
const common = require('./common');

axios({
    url: common.DOCUMENT_STORE_API_ENDPOINT_TRANSFERS,
    auth: {
      username: common.APP_CREDENTIAL_USER,
      password: common.APP_CREDENTIAL_PASSWORD
    }
}).then(response => {
  console.log(response.data);
}).catch(err => {
  console.log('Failed to browse documents: ' + err);
});