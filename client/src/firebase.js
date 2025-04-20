// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-marketplace-78eec.firebaseapp.com",
  projectId: "real-estate-marketplace-78eec",
  storageBucket: "real-estate-marketplace-78eec.firebasestorage.app",
  messagingSenderId: "276301209581",
  appId: "1:276301209581:web:7dbd44b327044d22f191e4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);