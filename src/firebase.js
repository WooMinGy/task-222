// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvTiQpc0x9gmOCNTyPpukgv8vgdeWBzNs",
  authDomain: "task-2-ef87f.firebaseapp.com",
  projectId: "task-2-ef87f",
  storageBucket: "task-2-ef87f.appspot.com",
  messagingSenderId: "788522164324",
  appId: "1:788522164324:web:aded3f1ec74ac3f3b5bf71",
  measurementId: "G-9E55VSY2CY",
};

initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const db = getFirestore();
