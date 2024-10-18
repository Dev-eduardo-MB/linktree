
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA_QfLsEhKsxCG6yjEJUIQ3nIgyWrkm79s",
  authDomain: "linktree-5bbdf.firebaseapp.com",
  projectId: "linktree-5bbdf",
  storageBucket: "linktree-5bbdf.appspot.com",
  messagingSenderId: "496372704036",
  appId: "1:496372704036:web:64b4b7f58b5e75b37449b1"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db};