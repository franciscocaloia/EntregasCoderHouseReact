import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { initializeApp } from "firebase/app";
/*
  *Función para hacer un reset en los stock de firebase, 
  *para utilizarla mover la funcion por debajo de la inicializacion de firebase y hacer un llamado a la funcion.
 import {
  collection,
  doc,
  getDocs,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
const refillStock = async () => {
  const db = getFirestore();
  const snapshot = await getDocs(collection(db, "items"));
  snapshot.docs.forEach((docSnap) => {
    updateDoc(doc(db, "items", docSnap.id), { stock: 10 });
  });
};*/

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<React.StrictMode>
  <App />
  //</React.StrictMode>
);
