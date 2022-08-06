import firebase from "firebase";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDcpNt6cWjuAT_xT3Dl9cLWr4Qx2NnAKVU",
    authDomain: "linkedin-clone-904a7.firebaseapp.com",
    projectId: "linkedin-clone-904a7",
    storageBucket: "linkedin-clone-904a7.appspot.com",
    messagingSenderId: "282780871850",
    appId: "1:282780871850:web:62669219c6fc22cacf74d3"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { auth, provider, storage };
export default db;