import React from "react";
import { useCart } from "../../contexts/CartContext";
import {
  StyledCartContainer,
  StyledCartLink,
  StyledClearButton,
  StyledClearButtonContainer,
} from "../styled/StyledCart.styled";
import CartCheckout from "./CartCheckout";
import CartList from "./CartList";

const CartContainer = () => {
  const { cart, clearCart, addOrder } = useCart();
  return (
    <StyledCartContainer>
      <h2>Productos en el carro</h2>
      {cart.items.length ? (
        <>
          <StyledClearButtonContainer>
            <StyledClearButton onClick={clearCart}>
              Limpiar carro
            </StyledClearButton>
          </StyledClearButtonContainer>
          <CartList cart={cart} />
          <CartCheckout cart={cart} clearCart={clearCart} addOrder={addOrder} />
        </>
      ) : (
        <>
          <span style={{ textAlign: "center" }}>
            No hay productos en el carrito
          </span>
          <StyledCartLink to="/">Ir a la tienda</StyledCartLink>
        </>
      )}
    </StyledCartContainer>
  );
};

export default CartContainer;
