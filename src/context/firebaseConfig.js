import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCicFDQ17Yv6m3Sa9k9CldHqQF2GtTPsxE",
  authDomain: "creative-dalaal.firebaseapp.com",
  projectId: "creative-dalaal",
  storageBucket: "creative-dalaal.appspot.com",
  messagingSenderId: "230492810780",
  appId: "1:230492810780:web:14da17cdfecec133b779d9",
  measurementId: "G-34JPHC0CP3"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

//Intance for google
const googleProvider = new GoogleAuthProvider();


//Sign Up
export const signupUserWithEmailAndPassword = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
}

//Sign In
export const signInUserWithEmailandPass = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
}

//Auth with Google
export const signInWithGoogle =()=> signInWithPopup(auth,googleProvider);

