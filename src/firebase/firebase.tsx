// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBE2-XuKXeb4TG7_a2aF_aAPmOoJmGf4Rg",
  authDomain: "chatty-celio.firebaseapp.com",
  projectId: "chatty-celio",
  storageBucket: "chatty-celio.appspot.com",
  messagingSenderId: "922356538679",
  appId: "1:922356538679:web:c29c0c215002b9df068eb2",
  measurementId: "G-WW6Z0G1QXL"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const storage = getStorage(app)
export const db = getFirestore(app)
export const analytics = getAnalytics(app);