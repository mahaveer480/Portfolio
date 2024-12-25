import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyAKBL2z1tJ6-WKa2OGJJOjswQo2cO85z88",
    authDomain: "portfolio-544b7.firebaseapp.com",
    projectId: "portfolio-544b7",
    storageBucket: "portfolio-544b7.firebasestorage.app",
    messagingSenderId: "901855786087",
    appId: "1:901855786087:web:de579184f708ce06c510c2",
    measurementId: "G-0D0R7MZ8HN"};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


export default db