import { createContext } from "react";
import app from "../Firebase/Firebase_config";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

import { useState } from "react";
import { useEffect } from "react";

const googleProvider = new GoogleAuthProvider();
const githubProvider=new GithubAuthProvider()

const auth=getAuth(app)

export const AuthContext=createContext(null)

const AuthProvider = ({children}) => {
   
    
   

    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const createUser=(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
     }
    
     const googleSignIn=()=>{
      setLoading(true);
      return signInWithPopup(auth,googleProvider)
    
     }
     const githubSignIn=()=>{
        setLoading(true);
        signInWithPopup(auth,githubProvider)
     }
     const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
     }
    const logout=()=>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    }, [])
    
         const authInfo={user,loading,createUser,signIn,logout,googleSignIn,githubSignIn}
    return (
        <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    );
};

export default AuthProvider;