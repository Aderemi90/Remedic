import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBRDDkWM4ryYl5oadtyklHgcVl2fRVfaVU",
  authDomain: "remedic-323ad.firebaseapp.com",
  projectId: "remedic-323ad",
  storageBucket: "remedic-323ad.appspot.com",
  messagingSenderId: "896102566209",
  appId: "1:896102566209:web:6171597dfda4b79c29b9c0",
  measurementId: "G-7EJ5QVF37J"
};

 
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();