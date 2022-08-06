import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
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
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;