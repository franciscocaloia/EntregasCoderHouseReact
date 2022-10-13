import React from "react";
import { StyledUserOrder } from "../styled/StyledOrder.styled";
import UserOrderItem from "./UserOrderItem";

const UserOrder = ({ order }) => {
  return (
    <StyledUserOrder>
      <h3>ID: {order.id}</h3>
      <p>Total: ${order.total}</p>
      <p>Fecha: {order.date}</p>
      <h3>Items: </h3>
      <ul>
        {order.items.map((item) => (
          <UserOrderItem item={item} key={item.id} />
        ))}
      </ul>
    </StyledUserOrder>
  );
};
export default UserOrder;
