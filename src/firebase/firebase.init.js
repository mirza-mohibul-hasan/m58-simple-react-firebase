// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfKozqNBN2RKu9fwd-0NLUhr6VcHzlTO0",
  authDomain: "m58-simple-react-firebase.firebaseapp.com",
  projectId: "m58-simple-react-firebase",
  storageBucket: "m58-simple-react-firebase.appspot.com",
  messagingSenderId: "470450152994",
  appId: "1:470450152994:web:a511f4e110ffb78b9e0c7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;