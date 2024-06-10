/* eslint-disable prettier/prettier */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCU5jHQXcK692xtDA-hjN0MDojLBxm0X7U",
  authDomain: "pizzashop-82557.firebaseapp.com",
  projectId: "pizzashop-82557",
  storageBucket: "pizzashop-82557.appspot.com",
  messagingSenderId: "557550570460",
  appId: "1:557550570460:web:10a0457ff760bd03bc9d19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);