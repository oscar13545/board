// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvh4xAuqgWStwPikYml9FEfuDXbXYqIQo",
  authDomain: "bordbas-2326f.firebaseapp.com",
  projectId: "bordbas-2326f",
  storageBucket: "bordbas-2326f.appspot.com",
  messagingSenderId: "801817786675",
  appId: "1:801817786675:web:1a754ee9888fac42c46646",
  measurementId: "G-JF05DZLNZ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);