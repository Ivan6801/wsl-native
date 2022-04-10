import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD93gOdW6Hru0m3ET1u_ciqkO8-3CL2lpM",
  authDomain: "wsl-clone-live.firebaseapp.com",
  projectId: "wsl-clone-live",
  storageBucket: "wsl-clone-live.appspot.com",
  messagingSenderId: "740975818679",
  appId: "1:740975818679:web:e3e66a2894693e07f61a32",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
