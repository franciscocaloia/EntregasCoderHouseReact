import React from "react";
import { useCart } from "../../contexts/CartContext";

const CartContainer = () => {
  const context = useCart();
  return (
    <div>
      {context.cart.map((p) => (
        <h6>
          id del producto: {p.id} cantidad del producto: {p.units}
        </h6>
      ))}
    </div>
  );
};

export default CartContainer;
