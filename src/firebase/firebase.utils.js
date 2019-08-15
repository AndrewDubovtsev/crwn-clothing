import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAFNgPwT2I7vpz5PZr6QRbgLyudOKa-JbY",
  authDomain: "crwn-db-2de60.firebaseapp.com",
  databaseURL: "https://crwn-db-2de60.firebaseio.com",
  projectId: "crwn-db-2de60",
  storageBucket: "",
  messagingSenderId: "494106478432",
  appId: "1:494106478432:web:cdc76eaaa68a42d1"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;