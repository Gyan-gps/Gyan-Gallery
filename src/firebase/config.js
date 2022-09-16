import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/storage'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDnqX0tJJrMZcro7r5g9g8zD2TaX4crcng",
    authDomain: "photo-gallery-8e52d.firebaseapp.com",
    projectId: "photo-gallery-8e52d",
    storageBucket: "photo-gallery-8e52d.appspot.com",
    messagingSenderId: "294795193220",
    appId: "1:294795193220:web:c7e8ef362e3c0a595b8bd1"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };