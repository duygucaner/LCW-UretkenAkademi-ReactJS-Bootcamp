// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGgTEs7d4c9307MCLRWKSIvZ7pUrch7WA",
  authDomain: "duygublog-863a5.firebaseapp.com",
  projectId: "duygublog-863a5",
  storageBucket: "duygublog-863a5.appspot.com",
  messagingSenderId: "41702751741",
  appId: "1:41702751741:web:831042f3f0e00aae8bad94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
