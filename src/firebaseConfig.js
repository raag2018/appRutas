// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLt3QT4tQ6vzon_Q46X7U9Gdwrl9LRN3w",
  authDomain: "apprutas-3af1f.firebaseapp.com",
  projectId: "apprutas-3af1f",
  storageBucket: "apprutas-3af1f.appspot.com",
  messagingSenderId: "881015801811",
  appId: "1:881015801811:web:849cddeaf1795104ef9126"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, googleProvider, db, collection, addDoc, getDocs };