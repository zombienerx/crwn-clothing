import firebase, { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyC4JtfKrY7jC_VDfsNSq4MK5oNAljSLQj8',
  authDomain: 'crwn-db-eb81d.firebaseapp.com',
  databaseURL: 'https://crwn-db-eb81d.firebaseio.com',
  projectId: 'crwn-db-eb81d',
  storageBucket: 'crwn-db-eb81d.appspot.com',
  messagingSenderId: '768832915001',
  appId: '1:768832915001:web:5f5a6c4b5703228446efe8',
  measurementId: 'G-ETNRMC4CH0',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;