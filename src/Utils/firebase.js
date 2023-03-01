import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import { GoogleAuthProvider, getAuth } from 'firebase/auth'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBf6t2vCJFeKW93C51Y6h59CrM79RbbcDg",
    authDomain: "sle-flix.firebaseapp.com",
    projectId: "sle-flix",
    storageBucket: "sle-flix.appspot.com",
    messagingSenderId: "373959557471",
    appId: "1:373959557471:web:f37f95b14ab9b826ca76ea",
    measurementId: "G-J1VC36WJ25"
  });

const db = firebase.firestore();
const auth = getAuth();
const provider = new GoogleAuthProvider()


export {db, auth, provider}