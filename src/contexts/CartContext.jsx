import React, { useState, useContext } from "react";

const CartContext = React.createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const getFromCart = (id) => {
    return cart.find((p) => p.id === id);
  };
  const isInCart = (id) => {
    return getFromCart(id) !== undefined;
  };
  const addToCart = (item, units) => {
    if (isInCart(item.id)) {
      setCart((prevCart) =>
        prevCart.map((p) =>
          p.id === item.id
            ? {
                ...item,
                units: p.units + units,
              }
            : p
        )
      );
    } else {
      setCart([...cart, { ...item, units: units }]);
    }
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };
  const context = {
    cart,
    getFromCart,
    isInCart,
    addToCart,
    clearCart,
    removeFromCart,
  };
  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
};
