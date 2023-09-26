// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore, doc, setDoc, getDoc, onSnapshot, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAgdSYe7q0yqpL4TAefNxPjy5ZpCcY3BsA",
  authDomain: "disneyplus-clone-6bb47.firebaseapp.com",
  projectId: "disneyplus-clone-6bb47",
  storageBucket: "disneyplus-clone-6bb47.appspot.com",
  messagingSenderId: "473955795744",
  appId: "1:473955795744:web:4e7765d28a956b1d480d45",
  measurementId: "G-NXWRRPCG6R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, doc, setDoc, getDoc, onSnapshot, collection };
export default db;