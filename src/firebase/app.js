// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB16S8B6Ba3QVZU3biF_A_6ba4MS4QkvdM",
  authDomain: "career-comps.firebaseapp.com",
  projectId: "career-comps",
  storageBucket: "career-comps.firebasestorage.app",
  messagingSenderId: "906011919747",
  appId: "1:906011919747:web:4885997e7ab5780210a2b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;