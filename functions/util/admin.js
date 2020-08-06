// In this file we will import the firebase admin package and initialize the firestore database object. We export this so that other modules can use it.

const admin = require("firebase-admin");

admin.initializeApp();

const db = admin.firestore();

module.exports = { admin, db };
