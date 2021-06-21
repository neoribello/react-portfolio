import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjHgLDN0AlP93isD-vziGAP0NvxoMcQEA",
  authDomain: "react-portfolio-6fb79.firebaseapp.com",
  projectId: "react-portfolio-6fb79",
  storageBucket: "react-portfolio-6fb79.appspot.com",
  messagingSenderId: "378737844436",
  appId: "1:378737844436:web:a8e31797f07a18be6d5b41",
  measurementId: "G-0893TWL161"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default db;