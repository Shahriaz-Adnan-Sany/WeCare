import { useEffect, useState } from "react"
import initializeAuthentication from "../../Firebase/Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

// Firebase Initialization
initializeAuthentication();

const useFirebase = () => {
    // Creating States
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    // Creating Auth 
    const auth = getAuth();

    // Google Provider
    const googleProvider = new GoogleAuthProvider();

    // GitHub Provider 
    const gitHubProvider = new GithubAuthProvider();


    // Google Sign In 
    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user);

                console.log(result.user);

            }).catch(error => {
                setError(error.messege)
            })
    }
    // GitHub Sign In
    const signInUsingGitHub = () => {
        signInWithPopup(auth, gitHubProvider)
            .then(result => {
                const user = result.user;
                setUser(user);

                console.log(result.user);
            }).catch(error => {
                setError(error.messege)
            })
    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        })
    }, [])
    return {
        user,
        error,
        logOut,
        signInUsingGoogle,
        signInUsingGitHub,
    }
}
export default useFirebase;
