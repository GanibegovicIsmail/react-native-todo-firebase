import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBR2tXIi6QVeNo-KNHge2f4HUGs5YTztdw",
  authDomain: "firestreamapp-2feb3.firebaseapp.com",
  projectId: "firestreamapp-2feb3",
  storageBucket: "firestreamapp-2feb3.appspot.com",
  messagingSenderId: "577657498955",
  appId: "1:577657498955:web:07d08381b07d81a0474cce",
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
