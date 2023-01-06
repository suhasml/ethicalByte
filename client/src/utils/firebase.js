// Import the functions you need from the SDKs you need
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyARcMTqWgFxZW6F38dnsJAinei_fzuaJy8',
  authDomain: 'react-netflix-udemy-clone.firebaseapp.com',
  projectId: 'react-netflix-udemy-clone',
  storageBucket: 'react-netflix-udemy-clone.appspot.com',
  messagingSenderId: '406260960955',
  appId: '1:406260960955:web:bbdc43197aa146d249a39e',
  measurementId: 'G-SGQ8Z6Z4TR',
};

// Initialize Firebase

const app = firebase.initializeApp(firebaseConfig);

export const storage = app.storage();

export default app;
