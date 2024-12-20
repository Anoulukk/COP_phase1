import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAkaxisyL5ZSC4v33kPolR6sFaWMtkBQS4",
  authDomain: "cop-systory.firebaseapp.com",
  projectId: "cop-systory",
  storageBucket: "cop-systory.firebasestorage.app",
  messagingSenderId: "75814882381",
  appId: "1:75814882381:web:82eb405fe1211b2e66a004",
  measurementId: "G-3BR0DWZPWL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;