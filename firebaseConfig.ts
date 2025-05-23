// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2o3--sj8LV49ECDH1yxbBzHtygG0IMrE",
  authDomain: "fir-test-250510.firebaseapp.com",
  projectId: "fir-test-250510",
  storageBucket: "fir-test-250510.firebasestorage.app",
  messagingSenderId: "823267887635",
  appId: "1:823267887635:web:fc4fdc501ca64bf777cde6",
  measurementId: "G-Q2HD4HD525"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
