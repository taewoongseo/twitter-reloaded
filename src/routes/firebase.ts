import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyALWCWc7aE4kjDr3eN0wr-CnZBqxGTFvRE",
  authDomain: "twitter-reloaded-97564.firebaseapp.com",
  projectId: "twitter-reloaded-97564",
  storageBucket: "twitter-reloaded-97564.appspot.com",
  messagingSenderId: "56344633478",
  appId: "1:56344633478:web:45e53e60c1feb1121c7107"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);