import React, { createContext, useEffect, useState } from 'react';
import { app } from '../../firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

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