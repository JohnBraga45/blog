// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAt5enZLKU8iPbN1sH2eOEuCjwT9J50oM",
  authDomain: "blog-840e6.firebaseapp.com",
  projectId: "blog-840e6",
  storageBucket: "blog-840e6.appspot.com",
  messagingSenderId: "1058354532918",
  appId: "1:1058354532918:web:17f602c4b89c1960c3fe97",
  measurementId: "G-P5HHH06L65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app)
export {db};