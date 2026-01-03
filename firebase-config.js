// firebase-config.js (stress-daily)
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  setDoc,
  getDoc,
  getDocs,
  query,
  where,
  orderBy,
  deleteDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCdfHtsOtFcs0f9KLaFTxjQ6ifqCyyFy_4",
  authDomain: "stress-daily.firebaseapp.com",
  projectId: "stress-daily",
  storageBucket: "stress-daily.firebasestorage.app",
  messagingSenderId: "456234851758",
  appId: "1:456234851758:web:95f1cbbcc03af30a1ebc3f",
  measurementId: "G-G02LVEKP88"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export {
  app, auth, provider, db,
  onAuthStateChanged, signInWithPopup, signOut,
  collection, doc, addDoc, setDoc, getDoc, getDocs,
  query, where, orderBy, deleteDoc, serverTimestamp
};
