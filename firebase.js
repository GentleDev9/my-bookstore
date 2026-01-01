import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyBN7sQFIbRb86kdtiXXBuX6b0dZJWOC26I",
  authDomain: "mybookstore-e8cee.firebaseapp.com",
  projectId: "mybookstore-e8cee",
  storageBucket: "mybookstore-e8cee.firebasestorage.app",
  messagingSenderId: "362520785794",
  appId: "1:362520785794:web:ff1e163736faba5e5e959b"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);















