'use strict';

const FormData = require('form-data');
const fs = require('fs');
const axios = require('axios');
const common = require('./common');

const formData = new FormData();
formData.append('document', fs.createReadStream(__dirname + '/../resources/kaleido.png'));

axios({
    method: 'put',
    url: common.DOCUMENT_STORE_API_ENDPOINT_DOCUMENTS + '/images/kaleido-logo.png',
    data: formData,
    headers: formData.getHeaders(),
    auth: {
      username: common.APP_CREDENTIAL_USER,
      password: common.APP_CREDENTIAL_PASSWORD
    }
}).then(response => {
    console.log(response.data)
}).catch(err => {
    console.log('Failed to upload document: ' + err);
});