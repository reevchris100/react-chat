// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAs1_Nbo0_o2w8D1-TtaJK0xVyiCDFGgcM",
  authDomain: "react-chat-401c1.firebaseapp.com",
  projectId: "react-chat-401c1",
  storageBucket: "react-chat-401c1.appspot.com",
  messagingSenderId: "693107111203",
  appId: "1:693107111203:web:a8b0c6d5bed1f532c3c896",
  measurementId: "G-CWZ2PXESWK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);