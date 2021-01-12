import firebase from "firebase/app";
import "firebase/auth";
// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzT06_S9LhLbFGmDgnlgW5Bf9P3qRFASw",
  authDomain: "adwa-619ee.firebaseapp.com",
  projectId: "adwa-619ee",
  storageBucket: "adwa-619ee.appspot.com",
  messagingSenderId: "423007064814",
  appId: "1:423007064814:web:896c2f5f8b1662560919ff",
  measurementId: "G-PTM3PVF6RL",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

googleAuthProvider.setCustomParameters({ prompt: "select_account" });
export const googleAuthProvider1 = () =>
  auth.signInWithPopup(googleAuthProvider);
