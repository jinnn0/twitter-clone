import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
  appId: process.env.REACT_APP_APP_ID
};

firebase.initializeApp(firebaseConfig);

// // Your web app's Firebase configuration
// var firebaseConfig = {
//   apiKey: 'AIzaSyCQUWX7kDWfIViV6OmASNUkJfZPCw-NpnE',
//   authDomain: 'twiter-clone-24cd4.firebaseapp.com',
//   databaseURL: 'https://twiter-clone-24cd4.firebaseio.com',
//   projectId: 'twiter-clone-24cd4',
//   storageBucket: 'twiter-clone-24cd4.appspot.com',
//   messagingSenderId: '6713186371',
//   appId: '1:6713186371:web:ded9678050d349623e9cf6'
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

const firebaseAuth = firebase.auth();
const firebaseStore = firebase.firestore();
const firebaseStorage = firebase.storage();

export { firebase, firebaseAuth, firebaseStore, firebaseStorage };
