import firebase from 'firebase';
import 'firebase/firestore';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyC3OHjNTZlUdPLo6bR-r3ydhKc_cxV-gyQ',
  authDomain: 'taller-33ad1.firebaseapp.com',
  projectId: 'taller-33ad1',
  storageBucket: 'taller-33ad1.appspot.com',
  messagingSenderId: '151174530423',
  appId: '1:151174530423:web:eb24877eef70f4683b4d72',
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
