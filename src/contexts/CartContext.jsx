import React, { useState, useContext, useEffect } from "react";

const CartContext = React.createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({ items: [], total: 0 });
  useEffect(() => {
    if (localStorage.getItem("cart"))
      setCart(JSON.parse(localStorage.getItem("cart")));
  }, []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const getFromCart = (id) => {
    return cart.items.find((p) => p.id === id);
  };
  const isInCart = (id) => {
    return getFromCart(id) !== undefined;
  };
  const addToCart = (item, units) => {
    setCart((prevCart) => ({
      items: isInCart(item.id)
        ? prevCart.items.map((p) =>
            p.id === item.id
              ? {
                  ...item,
                  units: p.units + units,
                }
              : p
          )
        : [...prevCart.items, { ...item, valid: true, units: units }],
      total: prevCart.total + item.price * units,
    }));
  };

  const removeFromCart = (item) => {
    setCart((prevCart) => ({
      items: prevCart.items.filter((i) => i.id !== item.id),
      total: prevCart.total - item.price * item.units,
    }));
  };

  const validateItemStock = (doc, item) => {
    if (item.units > doc.stock) {
      if (item.valid) {
        setCart((prevCart) => ({
          items: prevCart.items.map((i) =>
            i.id === item.id ? { ...i, valid: false } : i
          ),
          total: prevCart.total,
        }));
      }
      return false;
    } else {
      if (!item.valid) {
        setCart((prevCart) => ({
          items: prevCart.items.map((i) =>
            i.id === item.id ? { ...i, valid: true } : i
          ),
          total: prevCart.total,
        }));
      }
      return true;
    }
  };

  const clearCart = () => {
    setCart({ items: [], total: 0 });
  };
  const getItemsCount = () =>
    cart.items.reduce((prev, actual) => prev + actual.units, 0);
  const context = {
    cart,
    getFromCart,
    isInCart,
    addToCart,
    clearCart,
    removeFromCart,
    validateItemStock,
    getItemsCount,
  };

  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
};
