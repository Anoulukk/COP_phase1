import { FirebaseApp, initializeApp } from 'firebase/app';
import { Firestore, getFirestore } from 'firebase/firestore';
import { getStorage, FirebaseStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBjn1NnMu4JL2nLju4tJzUD-T7h8YLJYPw",
  authDomain: "basic-firebase-web-221f3.firebaseapp.com",
  projectId: "basic-firebase-web-221f3",
  storageBucket: "basic-firebase-web-221f3.appspot.com",
  messagingSenderId: "1095221245641",
  appId: "1:1095221245641:web:9604d568906a26553d7f18",
  measurementId: "G-1B4NBBFF2J"
};

const app: FirebaseApp = initializeApp(firebaseConfig);
const db: Firestore = getFirestore(app);
const storage: FirebaseStorage = getStorage(app);

export { app, db, storage };
