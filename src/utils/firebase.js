import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEo6pWhCW8I91v2P66gFa913VQFkgogrY",
  authDomain: "netflixapp-a704a.firebaseapp.com",
  projectId: "netflixapp-a704a",
  storageBucket: "netflixapp-a704a.appspot.com",
  messagingSenderId: "813356685886",
  appId: "1:813356685886:web:98d3e9e0f89a52ef1e8f6f",
  measurementId: "G-86QZQSZML7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
