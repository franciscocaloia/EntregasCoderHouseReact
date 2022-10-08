import React from "react";
import { useCart } from "../../contexts/CartContext";
import { StyledCartItem, StyledClearButton } from "../styled/StyledCart.styled";

const CartItem = ({ item }) => {
  const { name, units, price, img } = item;
  const context = useCart();
  const onClick = () => {
    context.removeFromCart(item);
  };
  return (
    <StyledCartItem>
      <div className="imageContainer">
        <img className="cartImage" src={img} alt={name} />
      </div>
      <div className="nameContainer">
        <span className="cartName">{name}</span>
      </div>
      <div className="priceContainer">
        <span className="cartPrice">${price}</span>
      </div>
      <div className="unitsContainer">
        <span className="cartUnits">Unidades: {units}</span>
      </div>
      <div className="buttonContainer">
        <StyledClearButton onClick={onClick}>x</StyledClearButton>
      </div>
    </StyledCartItem>
  );
};

export default CartItem;
