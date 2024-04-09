// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-Rs8EIvAx_AWjp4GfC6AMef3gu0tu0EU",
  authDomain: "assignment-09-8d382.firebaseapp.com",
  projectId: "assignment-09-8d382",
  storageBucket: "assignment-09-8d382.appspot.com",
  messagingSenderId: "939171219356",
  appId: "1:939171219356:web:15853550047e8097c56a59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

