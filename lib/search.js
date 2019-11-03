'use strict';

const axios = require('axios');
const common = require('./common');

const SEARCH_ENDPOINT = common.DOCUMENT_STORE_API_ENDPOINT_DOCUMENTS.substr(0, common.DOCUMENT_STORE_API_ENDPOINT_DOCUMENTS.length - 9);

axios({
    url: SEARCH_ENDPOINT + '/search?query=b5d4c3efcc59b32870af6d3cef645c9d6dbc5580f556316af2aabff768e54d77&by_hash=true',
    auth: {
      username: common.APP_CREDENTIAL_USER,
      password: common.APP_CREDENTIAL_PASSWORD
    }
}).then(response => {
  console.log(response.data);
}).catch(err => {
  console.log('Failed to search for document: ' + err);
});