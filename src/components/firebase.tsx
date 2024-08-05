// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7HXjUaUv7SJ7-kDAQEPeKJdSiLqe7WL8",
  authDomain: "todo-list-react-873ff.firebaseapp.com",
  projectId: "todo-list-react-873ff",
  storageBucket: "todo-list-react-873ff.appspot.com",
  messagingSenderId: "383342460243",
  appId: "1:383342460243:web:75a512e4ac8415a03b75a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);