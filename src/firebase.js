import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAVO92CRJ36Vsf9M-Gft2RnOlUhjf4eDOw",
  authDomain: "tiktokclone-react.firebaseapp.com",
  projectId: "tiktokclone-react",
  storageBucket: "tiktokclone-react.appspot.com",
  messagingSenderId: "231375711009",
  appId: "1:231375711009:web:c755dd41adcd71cd716c60"
};

firebase.initializeApp(firebaseConfig);



export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

let provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export default firebase;
