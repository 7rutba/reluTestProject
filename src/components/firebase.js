// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbdJacXUROsOxsunhr94L_bNpo3btscZ4",
  authDomain: "login-auth-610b2.firebaseapp.com",
  projectId: "login-auth-610b2",
  storageBucket: "login-auth-610b2.firebasestorage.app",
  messagingSenderId: "371627047125",
  appId: "1:371627047125:web:443b964926c95c6f1bca5c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;
