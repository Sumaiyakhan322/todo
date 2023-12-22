import { createContext } from "react";
import app from "../Firebase/Firebase_config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

import { useState } from "react";
import { useEffect } from "react";

const provider = new GoogleAuthProvider();

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
      return signInWithPopup(auth,provider)
    
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
            
            setUser(currentUser);
            console.log('current user', currentUser);
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    }, [])
    
         const authInfo={user,loading,createUser,signIn,logout,googleSignIn}
    return (
        <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    );
};

export default AuthProvider;