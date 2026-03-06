// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyABpyu83Kx6mFlVnv5QEPKKoKBAeUjj4aM",
    authDomain: "explore-email-pass-auth-fe8ca.firebaseapp.com",
    projectId: "explore-email-pass-auth-fe8ca",
    storageBucket: "explore-email-pass-auth-fe8ca.firebasestorage.app",
    messagingSenderId: "67796835407",
    appId: "1:67796835407:web:843aed9660278e472a5e3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);