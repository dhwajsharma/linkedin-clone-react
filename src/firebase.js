import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyArclL8MpJatJYb-fdmDnT2LkIKep-3UJI",
    authDomain: "linkedin-clone-fa3bf.firebaseapp.com",
    projectId: "linkedin-clone-fa3bf",
    storageBucket: "linkedin-clone-fa3bf.appspot.com",
    messagingSenderId: "473594735690",
    appId: "1:473594735690:web:02e854b5c294e22f2a4ab3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };