'use strict';

const axios = require('axios');
const common = require('./common');

const SEARCH_ENDPOINT = common.DOCUMENT_STORE_API_ENDPOINT_DOCUMENTS.substr(0, common.DOCUMENT_STORE_API_ENDPOINT_DOCUMENTS.length - 9);

axios({
    url: SEARCH_ENDPOINT + '/search?query=kaleido',
    auth: {
      username: common.APP_CREDENTIAL_USER,
      password: common.APP_CREDENTIAL_PASSWORD
    }
}).then(response => {
  console.log(response.data);
}).catch(err => {
  console.log('Failed to search for document: ' + err);
});