import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import app from "./app.js"; 

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export function Login() {
    signInWithPopup(auth, provider)
        .then(result => {
            console.log("User signed in:", result.user.displayName);
        })
        .catch(error => {
            console.error("Error signing in:", error);
        });
}

export function Logout() {

    signOut(auth)
        .then(() => {
            console.log("User signed out");
        })
        .catch(error => {
            console.error("Error signing out:", error);
        });
}

export function AuthState(callback) {
    onAuthStateChanged(auth, callback);
}
