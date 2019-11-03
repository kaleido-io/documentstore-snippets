'use strict';

const io = require('socket.io-client');
const common = require('./common');

io.connect(common.DOCUMENT_STORE_API_ENDPOINT_SOCKET_IO,
  {
    extraHeaders: {
      Authorization: 'Basic ' + Buffer.from(common.APP_CREDENTIAL_USER + ':' + common.APP_CREDENTIAL_PASSWORD).toString('base64')
    }
  }).on('connect', () => {
    console.log('Listening to events');
  }).on('connect_error', err => {
    console.log('Connection error' + err);
  }).on('error', err => {
    console.log('Error:' + err);
  }).on('document_sent', data => {
    console.log('Document sent: ' + JSON.stringify(data));
  }).on('document_received', data => {
    console.log('Document received: ' + JSON.stringify(data));
  }).on('transfer_acknowledgement', data => {
    console.log('Transfer acknowledgement: ' + JSON.stringify(data));
  });