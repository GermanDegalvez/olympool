// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAmuqzxoYNc-dNA1SRZsuPLnkp4ru4S88",
  authDomain: "olympool-auth.firebaseapp.com",
  projectId: "olympool-auth",
  storageBucket: "olympool-auth.appspot.com",
  messagingSenderId: "550009649235",
  appId: "1:550009649235:web:c0f5fa2e20cdc1cfb66ea6"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth( FirebaseApp );

export const FirebaseDB = getFirestore( FirebaseApp );
