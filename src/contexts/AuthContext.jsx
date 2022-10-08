import React, { useEffect, useContext, createContext, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [authError, setAuthError] = useState(null);
  const [showSignin, setShowSignin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const auth = getAuth();
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

  const signup = async (email, password, fullName) => {
    try {
      setAuthError(null);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential.user);
      await updateUserProfile(userCredential.user, fullName);
      toggleSignup();
    } catch (error) {
      switch (error.code) {
        case "auth/email-already-in-use":
          setAuthError("El correo electronico ya esta en uso");
          break;
        default:
      }
    }
  };

  const signin = async (email, password) => {
    try {
      setAuthError(null);
      await signInWithEmailAndPassword(auth, email, password);
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

  const updateUserProfile = (user, fullName) => {
    updateProfile(user, { displayName: fullName });
  };

  const logout = async () => {
    signOut(auth);
  };
  const context = {
    currentUser,
    authError,
    showSignin,
    showSignup,
    signup,
    logout,
    signin,
    toggleSignin,
    toggleSignup,
  };
  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};
