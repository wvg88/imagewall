// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDf7WHkDddnOy9UgoOtaqrXSc2sBjZlUHI",
  authDomain: "wall-61a55.firebaseapp.com",
  projectId: "wall-61a55",
  storageBucket: "wall-61a55.appspot.com",
  messagingSenderId: "268156439905",
  appId: "1:268156439905:web:7c11d413d9336163b28920"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);