// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAQJ1t6h9bDLNUc0ZqQKSMXZwPT-wITIsQ",
  authDomain: "desire-vault-auth.firebaseapp.com",
  projectId: "desire-vault-auth",
  storageBucket: "desire-vault-auth.appspot.com",
  messagingSenderId: "552758950354",
  appId: "1:552758950354:web:579e7ce6ca82b7ded9700b",
  measurementId: "G-C9D8QBDXGY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Authentication
const auth = getAuth(app);

export { db, auth };