import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBGnJ-aZB2Ivz64gJOcn5S3ccOv8MtjVS4",
    authDomain: "clone-e8c77.firebaseapp.com",
    projectId: "clone-e8c77",
    storageBucket: "clone-e8c77.appspot.com",
    messagingSenderId: "538203448955",
    appId: "1:538203448955:web:daf0a69cc8cc136dade4de",
    measurementId: "G-DLC8QEXW31"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };