// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
apiKey: "AIzaSyBE8v18_nIbyYwbnjEZmG5CTcYpghHU9eY",
authDomain: "anodalreservas.firebaseapp.com",
projectId: "anodalreservas",
storageBucket: "anodalreservas.firebasestorage.app",
messagingSenderId: "413462830762",
appId: "1:413462830762:web:5a4117343dc7cdbdf97ad3",
measurementId: "G-16SMT3CD67"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);

export default app;
