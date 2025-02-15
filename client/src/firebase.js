// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-915eb.firebaseapp.com",
  projectId: "blog-915eb",
  storageBucket: "blog-915eb.appspot.com",
  messagingSenderId: "1028738133843",
  appId: "1:1028738133843:web:f5d1eeae7380b7cb417ba6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
