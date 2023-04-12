const { initializeApp } = require("firebase/app");
const { getFirestore } = require('firebase/firestore');


const firebaseConfig = {
  apiKey: "AIzaSyDgwQqW8ZOj88V4pYC164P3hmVgU6XUgZs",
  authDomain: "fir-de01d.firebaseapp.com",
  projectId: "fir-de01d",
  storageBucket: "fir-de01d.appspot.com",
  messagingSenderId: "346611405000",
  appId: "1:346611405000:web:0eb269d65c9ea41c4055fd",
  measurementId: "G-B273K3JMPG"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

module.exports = { app, db }