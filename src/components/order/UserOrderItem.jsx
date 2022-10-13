import React from "react";
import { StyledUserOrderItem } from "../styled/StyledOrder.styled";

const UserOrderItem = ({ item }) => {
  return (
    <StyledUserOrderItem>
      <p className="itemName">{item.name}</p>
      <p className="itemUnits">Unidades: {item.units}</p>
      <p className="itemPrice">Precio: ${item.price}</p>
    </StyledUserOrderItem>
  );
};

export default UserOrderItem;
