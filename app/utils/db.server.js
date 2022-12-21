// Import the functions you need from the SDKs you need
import admin from "firebase-admin"
import { applicationDefault, initializeApp as initializeAdminApp } from "firebase-admin/app";
import { initializeApp } from "firebase/app";

require("dotenv").config();

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: "winkley-wedding-rsvps",
  storageBucket: "winkley-wedding-rsvps.appspot.com",
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

if (!admin?.apps?.length) {
  initializeAdminApp({
    credential: applicationDefault(),
    databaseURL: "https://winkley-wedding-rsvps.firebaseio.com"
  })
};

const db = admin.firestore();

let Firebase;

// Initialize Firebase
if (!Firebase?.apps?.length) {
  Firebase = initializeApp(firebaseConfig);
}

export { db }