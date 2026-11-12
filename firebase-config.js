// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2gkG4Oraq7m8LqLSVRcjiGtU9Rpm9eCQ",
  authDomain: "ecoledonbosco-250f2.firebaseapp.com",
  projectId: "ecoledonbosco-250f2",
  storageBucket: "ecoledonbosco-250f2.firebasestorage.app",
  messagingSenderId: "441971860339",
  appId: "1:441971860339:web:158617e29d26634fe2db06",
  measurementId: "G-4NHQ8H161D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);