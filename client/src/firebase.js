// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "horizonhaven-a3425.firebaseapp.com",
  projectId: "horizonhaven-a3425",
  storageBucket: "horizonhaven-a3425.appspot.com",
  messagingSenderId: "247816936222",
  appId: "1:247816936222:web:024ffb1a4ad24d90f3870f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);