import React from "react";
import { Link } from "react-router-dom";
import { StyledMenuItem } from "../styled/StyledNavBar.styled";

const CartWidget = ({ URL }) => {
  return (
    <StyledMenuItem>
      <Link to={URL}>
        <img src="/assets/cart.svg" alt="cart logo"></img>
      </Link>
    </StyledMenuItem>
  );
};

export default CartWidget;
