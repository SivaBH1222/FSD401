// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

// Your Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyCnueeQt-Jl8SZg2w0IlHbNToUtkWa-ui0",
    authDomain: "chococome-1bd96.firebaseapp.com",
    databaseURL: "https://chococome-1bd96-default-rtdb.firebaseio.com",
    projectId: "chococome-1bd96",
    storageBucket: "chococome-1bd96.firebasestorage.app",
    messagingSenderId: "1027598006014",
    appId: "1:1027598006014:web:05e2b1c231ba19a0dfd7af",
    measurementId: "G-PG3K9CBV3R"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);