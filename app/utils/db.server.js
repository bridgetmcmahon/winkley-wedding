// Import the functions you need from the SDKs you need
import admin from "firebase-admin"
import { cert, initializeApp as initializeAdminApp } from "firebase-admin/app";
import { initializeApp } from "firebase/app";

require("dotenv").config();

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "winkley-wedding-rsvps.firebaseapp.com",
  projectId: "winkley-wedding-rsvps",
  storageBucket: "winkley-wedding-rsvps.appspot.com",
  messagingSenderId: "1064223363919",
  appId: "1:1064223363919:web:9da04ca8e45e6f4c132b3a"
};

if (!admin?.apps?.length) {
  initializeAdminApp({
    credential: cert({
      projectId: process.env.GOOGLE_PROJECT_ID,
      clientEmail: process.env.GOOGLE_CLIENT_EMAIL,
      privateKey: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/gm, "\n")
    }),
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