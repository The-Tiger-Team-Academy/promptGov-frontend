import { Auth, GoogleAuthProvider, UserCredential, signInWithPopup } from "firebase/auth";
import firebaseAuth from "./auth";

const signInWithGoogle = async () => {
    try {
        const auth : Auth = firebaseAuth;
        const provider = new GoogleAuthProvider();
        const result: UserCredential = await signInWithPopup(auth, provider);
        return result;

    } catch (error) {
        console.error("Error signing in with Google:", error);
        return null;
    }
};

export default signInWithGoogle;