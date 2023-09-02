// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzHLoC2TG0CUpDpQ72j_SWf5ZHie8egZU",
  authDomain: "islamic-app-6fcc2.firebaseapp.com",
  projectId: "islamic-app-6fcc2",
  storageBucket: "islamic-app-6fcc2.appspot.com",
  messagingSenderId: "352561608347",
  appId: "1:352561608347:web:d81703da2827b91851383e",
  measurementId: "G-T8PHJ8528T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;