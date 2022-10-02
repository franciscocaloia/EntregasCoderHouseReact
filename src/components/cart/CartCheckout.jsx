import { addDoc, collection, getFirestore } from "firebase/firestore";
import React from "react";
import { useCart } from "../../contexts/CartContext";
import { StyledCheckoutContainer } from "../styled/StyledCart.styled";
import CartForm from "./CartForm";

const CartCheckout = () => {
  const { cart, clearCart } = useCart();
  const db = getFirestore();
  const ordersCollection = collection(db, "orders");
  const onFormSubmit = (buyer) => {
    let today = new Date().toISOString().slice(0, 10);
    const newOrder = {
      buyer,
      items: cart.items,
      total: cart.total,
      date: today,
    };
    addDoc(ordersCollection, newOrder);
    clearCart();
  };
  return (
    <StyledCheckoutContainer>
      <CartForm onFormSubmit={onFormSubmit} />
    </StyledCheckoutContainer>
  );
};

export default CartCheckout;
