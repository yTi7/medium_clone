// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADA232Kzy4GlTLpxE8rpkSfgeGfDYewTU",
  authDomain: "medium-clonie.firebaseapp.com",
  projectId: "medium-clonie",
  storageBucket: "medium-clonie.appspot.com",
  messagingSenderId: "800702993968",
  appId: "1:800702993968:web:2fa0119797e8d8a288fff5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
