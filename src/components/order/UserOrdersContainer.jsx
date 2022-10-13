import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { StyledUserOrdersContainer } from "../styled/StyledOrder.styled";
import UserOrdersList from "./UserOrdersList";

const UserOrdersContainer = ({ currentUser }) => {
  const [currentUserOrders, setCurrentUserOrders] = useState([]);
  useEffect(() => {
    (async () => {
      const db = getFirestore();
      const q = query(
        collection(db, "orders"),
        where("buyer.uid", "==", currentUser.uid)
      );
      const querySnapshot = await getDocs(q);
      setCurrentUserOrders(
        querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    })();
  }, [currentUser]);

  return (
    <StyledUserOrdersContainer>
      <h2>Mis Ordenes</h2>
      {currentUserOrders.length ? (
        <UserOrdersList orders={currentUserOrders} />
      ) : null}
    </StyledUserOrdersContainer>
  );
};

export default UserOrdersContainer;
