import React, { useState, useContext } from "react";

const CartContext = React.createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (id, units) => {
    if (cart.find((p) => p.id === id)) {
      setCart((prevCart) =>
        prevCart.map((p) =>
          p.id === id
            ? {
                id: p.id,
                units: p.units + units,
              }
            : p
        )
      );
    } else {
      setCart([...cart, { id: id, units: units }]);
    }
  };
  const context = {
    cart,
    addToCart,
  };
  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
};
