// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxeMKf3ldl4nuPSdnWL_tl1tNneQIgepw",
  authDomain: "react-entrega-final-e99af.firebaseapp.com",
  projectId: "react-entrega-final-e99af",
  storageBucket: "react-entrega-final-e99af.appspot.com",
  messagingSenderId: "971166490570",
  appId: "1:971166490570:web:a71432a185675d2460f933"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const db = getFirestore(app);