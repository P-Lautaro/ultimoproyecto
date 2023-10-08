import React from "react";
import { Auth } from "../firebase/firebase.config";
import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) {
        console.log("error creating auth context")
    }
    return context;
};


export function AuthProvider({children}){
    return <authContext.Provider>{children}</authContext.Provider>
}