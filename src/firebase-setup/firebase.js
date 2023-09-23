import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBKeXfVli7dD13GRNfmynbXBhUy5AMPF-I",
  authDomain: "chat-voyage.firebaseapp.com",
  projectId: "chat-voyage",
  storageBucket: "chat-voyage.appspot.com",
  messagingSenderId: "450630665767",
  appId: "1:450630665767:web:b897e026da3d41724c3002"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const storage= getStorage(app);
export const db = getFirestore(app);
export default app;