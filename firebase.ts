// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuXgKHXvYvMlvnFGViGjV5_UJGykeU__E",
  authDomain: "netclonix-1.firebaseapp.com",
  projectId: "netclonix-1",
  storageBucket: "netclonix-1.appspot.com",
  messagingSenderId: "393860508877",
  appId: "1:393860508877:web:228446d3d44979a8828d84"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore()
const auth = getAuth()

export default app
export {auth , db}