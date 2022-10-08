import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import { StyledCheckoutButton } from "../styled/StyledAuth.styled";
import {
  StyledCartTotal,
  StyledCheckoutContainer,
} from "../styled/StyledCart.styled";
const CartCheckout = ({ cart, clearCart, addOrder }) => {
  const { currentUser, toggleSignin } = useAuth();
  const handleCheckout = () => {
    if (currentUser) {
      addOrder(currentUser);
    } else {
      toggleSignin();
    }
  };
  return (
    <StyledCheckoutContainer columns={`repeat(2,1fr)`} gap={`1rem`}>
      <StyledCartTotal>TOTAL: $ {cart.total}</StyledCartTotal>
      <StyledCheckoutButton onClick={handleCheckout}>
        Finalizar compra
      </StyledCheckoutButton>
    </StyledCheckoutContainer>
  );
};

export default CartCheckout;
