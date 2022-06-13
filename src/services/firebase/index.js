import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDF2L7hVFaLvh5uyvW3Yd7-qc2qLsxRswU",
  authDomain: "backeffy.firebaseapp.com",
  projectId: "backeffy",
  storageBucket: "backeffy.appspot.com",
  messagingSenderId: "743034113745",
  appId: "1:743034113745:web:e0d79d80e63ea868577ff0"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)