'use strict';

const axios = require('axios');
const common = require('./common');

const ENDPOINT = common.DOCUMENT_STORE_API_ENDPOINT_DOCUMENTS.substr(0, common.DOCUMENT_STORE_API_ENDPOINT_DOCUMENTS.length - 10);

axios({
    method: 'put',
    url: ENDPOINT + '/preferences',
    auth: {
      username: common.APP_CREDENTIAL_USER,
      password: common.APP_CREDENTIAL_PASSWORD
    },
    data: {
      key: 'receivedDocumentsPath',
      value: '/transfers/to/${recipient_destination}/from/${sender_org}-${sender_destination}'
    }
}).then(response => {
  console.log(response.data);
}).catch(err => {
  console.log('Failed to delete document: ' + err);
});