import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBraCZXHoJT809tLZhZpNe9oF1WRRKcRIc",
    authDomain: "southindianog.firebaseapp.com",
    projectId: "southindianog",
    storageBucket: "southindianog.firebasestorage.app",
    messagingSenderId: "213435055770",
    appId: "1:213435055770:web:b5d4b9c2929ff82f872923",
    measurementId: "G-QDK361SVSP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

export default app;
