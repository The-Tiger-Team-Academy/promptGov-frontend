// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};


  // apiKey: "AIzaSyD3ofqCmLm3-1DaV6N_X4uODlKARj_L8Vs",
  // authDomain: "bestreact-1b891.firebaseapp.com",
  // projectId: "bestreact-1b891",
  // storageBucket: "bestreact-1b891.appspot.com",
  // messagingSenderId: "469637779943",
  // appId: "1:469637779943:web:44efde1de6e9a4c8182d42",
  // measurementId: "G-7JKHP5GQSZ"

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(app);
export default firebaseAuth;
