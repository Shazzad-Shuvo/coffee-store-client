// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVQGseuoAEJiPnlQa9D8Vz-per4_0DkRI",
  authDomain: "coffee-store-314fb.firebaseapp.com",
  projectId: "coffee-store-314fb",
  storageBucket: "coffee-store-314fb.appspot.com",
  messagingSenderId: "74590437779",
  appId: "1:74590437779:web:bd8625fb142cf66087a866"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;