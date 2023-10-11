// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCs38HFHwbF9rPTFsAykIpr5MQRqc8MHh8",
  authDomain: "ultimoproyecto-9b8e8.firebaseapp.com",
  projectId: "ultimoproyecto-9b8e8",
  storageBucket: "ultimoproyecto-9b8e8.appspot.com",
  messagingSenderId: "545410287886",
  appId: "1:545410287886:web:6367298e742e34e535ef5f",
  measurementId: "G-8WMJTH3TSR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const  auth = getAuth(app);