import { signOut, Auth } from "firebase/auth";
import firebaseAuth from "./auth";

const signOUt = async () => {
    try {
        const auth: Auth = firebaseAuth;
        await signOut(auth);
    } catch (error) {
        console.error("Error signing out:", error);
    }
};

export default signOUt;
