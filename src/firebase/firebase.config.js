// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUGK4Y5Z_k9qQ6iPjVLQKNlTB-HTgRNzs",
  authDomain: "dragon-news-31fee.firebaseapp.com",
  projectId: "dragon-news-31fee",
  storageBucket: "dragon-news-31fee.firebasestorage.app",
  messagingSenderId: "538163009925",
  appId: "1:538163009925:web:6235ce4244318fbabd0cec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);