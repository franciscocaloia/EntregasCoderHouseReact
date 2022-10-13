import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { StyledCheckoutButton } from "../styled/StyledAuth.styled";
import CartCheckoutConfirm from "./CartCheckoutConfirm";
import CartAlert from "./CartAlert";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getFirestore,
  increment,
  updateDoc,
} from "firebase/firestore";
import {
  StyledCartTotal,
  StyledCheckoutContainer,
} from "../styled/StyledCart.styled";
import { useNavigate } from "react-router-dom";

const CartCheckout = ({ cart, clearCart, validateItemStock }) => {
  const { currentUser, getUserInfo, toggleSignin, logout } = useAuth();
  const navigate = useNavigate();
  const [showCheckoutConfirm, setShowCheckoutConfirm] = useState(false);
  const [cartValid, setCartValid] = useState(true);
  const [cartError, setCartError] = useState();
  const [cartSuccess, setCartSuccess] = useState(false);

  const validateCart = async () => {
    const db = getFirestore();
    await cart.items.forEach(async (item) => {
      const docSnap = await getDoc(doc(db, "items", item.id));
      if (cartValid && !validateItemStock(docSnap.data(), item))
        setCartValid(false);
    });
  };

  const addOrder = async (currentUser, currentUserInfo) => {
    const today = new Date().toISOString().slice(0, 10);
    const buyer = {
      uid: currentUser.uid,
      firstName: currentUserInfo.firstName,
      lastName: currentUserInfo.lastName,
      phone: currentUserInfo.phone,
      email: currentUser.email,
    };

    const newOrder = {
      buyer,
      items: cart.items.map(({ id, name, price, units }) => ({
        id,
        name,
        price,
        units,
      })),
      total: cart.total,
      date: today,
    };

    try {
      const db = getFirestore();
      const ordersCollection = collection(db, "orders");
      const orderRef = await addDoc(ordersCollection, newOrder);
      cart.items.forEach((item) => {
        const itemRef = doc(db, "items", item.id);
        updateDoc(itemRef, { stock: increment(-item.units) });
      });
      setCartSuccess(orderRef.id);
    } catch (error) {
      setCartError(
        "Hubo un problema con su compra, por favor intente de nuevo mas tarde"
      );
    }
  };

  const handleCheckout = async () => {
    if (!currentUser) {
      return toggleSignin();
    }
    await validateCart();
    if (!cartValid) {
      return setCartError(
        "El carro contiene productos sin stock. Eliminelos o espere a que el stock se reponga"
      );
    }
    setShowCheckoutConfirm(true);
  };

  const handleConfirmButton = async () => {
    const currentUserInfo = await getUserInfo();
    addOrder(currentUser, currentUserInfo);
    setShowCheckoutConfirm(false);
  };

  const handleAccountChangeButton = () => {
    logout();
    toggleSignin();
    setShowCheckoutConfirm(false);
  };

  const handleCancelButton = () => setShowCheckoutConfirm(false);

  const handleCloseAlert = () => {
    if (cartSuccess) {
      clearCart();
      setCartSuccess(null);
      navigate("/");
    } else if (cartError) {
      setCartError();
    }
  };

  return (
    <>
      <StyledCheckoutContainer columns={`repeat(2,1fr)`} gap={`1rem`}>
        <StyledCartTotal>TOTAL: $ {cart.total}</StyledCartTotal>
        <StyledCheckoutButton onClick={handleCheckout}>
          Finalizar compra
        </StyledCheckoutButton>
      </StyledCheckoutContainer>
      {showCheckoutConfirm && (
        <CartCheckoutConfirm
          currentUser={currentUser}
          handleConfirmButton={handleConfirmButton}
          handleAccountChangeButton={handleAccountChangeButton}
          handleCancelButton={handleCancelButton}
        />
      )}
      <CartAlert
        cartError={cartError}
        cartSuccess={cartSuccess}
        handleCloseAlert={handleCloseAlert}
      />
    </>
  );
};

export default CartCheckout;
