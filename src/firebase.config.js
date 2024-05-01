// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZ3QsN8yuIUZbCC0zqbPwlLRIq_1-5LZU",
  authDomain: "ani-53f32.firebaseapp.com",
  projectId: "ani-53f32",
  storageBucket: "ani-53f32.appspot.com",
  messagingSenderId: "563383161962",
  appId: "1:563383161962:web:553fcc8455a48ae922e613",
  measurementId: "G-NYTC34FFRX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export default firebaseConfig