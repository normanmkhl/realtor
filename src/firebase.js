// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDuB4L6WQ-dro2rk7q98K7Sc5-Akh7pAU",
  authDomain: "realtor-de23d.firebaseapp.com",
  projectId: "realtor-de23d",
  storageBucket: "realtor-de23d.appspot.com",
  messagingSenderId: "218313351898",
  appId: "1:218313351898:web:20805f694931a8cfb0fbe3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore()