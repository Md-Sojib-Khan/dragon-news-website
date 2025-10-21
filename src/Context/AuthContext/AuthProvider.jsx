import React, { createContext, useEffect, useState } from 'react';
import { app } from '../../firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignInUser = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const updateUser = (updatedData) =>{
        return updateProfile(auth.currentUser, updatedData)
    }

    const forgatePassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    const logOutUser = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsabscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        });
        return () => {unsabscribe()}
    }, [])

    const authInfo = {
        user,
        loading,
        setUser,
        createUser,
        googleSignInUser,
        logInUser,
        forgatePassword,
        logOutUser,
        updateUser,
    }
    return <AuthContext value={authInfo}>
        {children}
    </AuthContext>;
};

export default AuthProvider;