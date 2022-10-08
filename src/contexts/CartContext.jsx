import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, { useState, useContext } from "react";

const CartContext = React.createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({ items: [], total: 0 });
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
        : [...prevCart.items, { ...item, units: units }],
      total: prevCart.total + item.price * units,
    }));
  };

  const removeFromCart = (item) => {
    setCart((prevCart) => ({
      items: prevCart.items.filter((i) => i.id !== item.id),
      total: prevCart.total - item.price * item.units,
    }));
  };

  const addOrder = (currentUser) => {
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    const today = new Date().toISOString().slice(0, 10);
    const buyer = {
      fullName: currentUser.displayName,
      email: currentUser.email,
    };
    const newOrder = {
      buyer,
      items: cart.items,
      total: cart.total,
      date: today,
    };
    addDoc(ordersCollection, newOrder);
    clearCart();
  };

  const clearCart = () => {
    setCart({ items: [], total: 0 });
  };
  const context = {
    cart,
    getFromCart,
    isInCart,
    addToCart,
    clearCart,
    removeFromCart,
    addOrder,
  };
  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
};
