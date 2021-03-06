import { useState } from "react"
import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect } from "react";
initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();

    const signinUsinggoogle = () => {
        return signInWithPopup(auth, googleProvider)
            .finally(() => {
                setLoading(false)

            });
    }
    const signinUsinggit = () => {
        return signInWithPopup(auth, gitProvider).finally(() => { setLoading(false) })
    }
    const registerNewUser = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
                setUserName(name);
                saveUser(email, name, 'POST');
                window.location.reload();
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
                setError(errorCode);
            });
    }
    const setUserName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(
            result => { }
        )
    };
    const signinwithpassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password).finally(() => { setLoading(false) })
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setLoading(false);
        })
    }, []);
    useEffect(() => {
        fetch(`https://safe-shore-20659.herokuapp.com/users-cehck/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])
    const logout = () => {
        setLoading(true);
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
            setError(error)
        }).finally(() => setLoading(false));
    }
    const saveUser = (email, displauName, method) => {
        const user = { email, displauName };
        fetch('https://safe-shore-20659.herokuapp.com/users', {
            method: method, // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', user);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    return {
        user,
        error,
        loading,
        admin,
        saveUser,
        signinUsinggoogle,
        signinUsinggit,
        logout,
        registerNewUser,
        signinwithpassword
    }
}


export default useFirebase;