import React from "react";
import { useCart } from "../../contexts/CartContext";
import { StyledCartContainer } from "../styled/StyledCart.styled";
import CartList from "./CartList";

const CartContainer = () => {
  const context = useCart();
  return (
    <StyledCartContainer>
      <h2>Productos en el carro</h2>
      <CartList items={context.cart} />
    </StyledCartContainer>
  );
};

export default CartContainer;
