'use strict';

const admin = require('firebase-admin');

const serviceAccount = require('./vendors/credentials/recipes-861f8-firebase-adminsdk-vfllf-add91f8fab.json');

const firebase = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://recipes-861f8.firebaseio.com"
});

console.log("Start firebase database connection");
console.log("databaseURL: https://recipes-app-388be.firebaseio.com");
module.exports = firebase;