// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBaGvKgsV0wSIX3uLv1DnqvLMDl5FT9lEY",
  authDomain: "ivs-clothing-db-440f4.firebaseapp.com",
  projectId: "ivs-clothing-db-440f4",
  storageBucket: "ivs-clothing-db-440f4.appspot.com",
  messagingSenderId: "801397172089",
  appId: "1:801397172089:web:c99d8c96d7a0ddaff431a8",
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  login_hint: "user@example.com",
  prompt: "select_account", // always force users to select an account
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
