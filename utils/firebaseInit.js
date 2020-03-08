/* eslint-disable import/first */

// function isNode() {
//     return (
//       typeof process !== "undefined" &&
//       process.release &&
//       process.release.name === "node"
//     );
//   }
  
//   if (isNode()) {
//     //global.XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
//   }
  
//   require("@firebase/polyfill");
//   const firebase = require("@firebase/app").default;
//   require("@firebase/firestore");
//   require("@firebase/auth");
  
//   try {
//     firebase.initializeApp({
//       apiKey: process.env.FIREBASE_PUBLIC_API_KEY,
//       authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//       databaseURL: process.env.FIREBASE_DATABASE_URL,
//       projectId: process.env.FIREBASE_PROJECT_ID,
//     });
//   } catch (err) {
//     if (!/already exists/.test(err.message)) {
//       console.error("Firebase initialization error", err.stack);
//     }
//   }
  
//   const auth = firebase.auth();
//   const firestore = firebase.firestore();
  
//   export { firebase, auth, firestore };

import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
  apiKey: process.env.FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
}

export default () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(config)
  }
}