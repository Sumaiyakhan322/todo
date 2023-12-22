// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbyAXNMZHPHh66Y9zY11DKifwiAcjloEk",
  authDomain: "todo-app-4b547.firebaseapp.com",
  projectId: "todo-app-4b547",
  storageBucket: "todo-app-4b547.appspot.com",
  messagingSenderId: "198525810778",
  appId: "1:198525810778:web:a4f3fb5bcebf77c81fc063"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default  app