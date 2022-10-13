import React, { useEffect, useContext, createContext, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [authError, setAuthError] = useState(null);
  const [authSuccess, setAuthSuccess] = useState(null);
  const [showSignin, setShowSignin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const auth = getAuth();
  const db = getFirestore();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    setAuthError(null);
    return unsubscribe;
  }, [auth]);

  const toggleSignin = () => {
    setShowSignin(!showSignin);
  };

  const toggleSignup = () => {
    setShowSignup(!showSignup);
  };

  const signup = async (email, password, firstName, lastName, phone) => {
    try {
      setAuthError(null);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUserInfo(userCredential.user.uid, firstName, lastName, phone);
      setAuthSuccess("signup");
      setTimeout(() => {
        setAuthSuccess(null);
      }, 5000);
      toggleSignup();
    } catch (error) {
      switch (error.code) {
        case "auth/email-already-in-use":
          setAuthError("El correo electronico ya esta en uso");
          break;
        default:
      }
      setTimeout(() => {
        setAuthError(null);
      }, 5000);
    }
  };

  const signin = async (email, password) => {
    try {
      setAuthError(null);
      await signInWithEmailAndPassword(auth, email, password);
      setAuthSuccess("signin");
      setTimeout(() => {
        setAuthSuccess(null);
      }, 5000);
      toggleSignin();
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          setAuthError("El usuario no está registrado");
          break;
        case "auth/wrong-password":
          setAuthError("Contraseña incorrecta");
          break;
        case "auth/too-many-requests":
          setAuthError("Demasiados intentos, vuelve a intentar mas tarde...");
          break;
        default:
      }
      setTimeout(() => {
        setAuthError(null);
      }, 5000);
    }
  };

  const setUserInfo = (uid, firstName, lastName, phone) => {
    setDoc(doc(db, "userInfo", uid), { firstName, lastName, phone });
  };

  const getUserInfo = async () => {
    const userInfoRef = doc(db, "userInfo", currentUser.uid);
    const docSnap = await getDoc(userInfoRef);
    return docSnap.data();
  };
  const logout = async () => {
    signOut(auth);
  };
  const context = {
    currentUser,
    authError,
    authSuccess,
    showSignin,
    showSignup,
    signup,
    logout,
    signin,
    getUserInfo,
    toggleSignin,
    toggleSignup,
  };
  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};
