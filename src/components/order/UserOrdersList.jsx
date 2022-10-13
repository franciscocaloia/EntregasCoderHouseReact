import React from "react";
import UserOrder from "./UserOrder";

const UserOrdersList = ({ orders }) => {
  return (
    <div>
      {orders.map((order) => (
        <UserOrder order={order} key={order.id} />
      ))}
    </div>
  );
};

export default UserOrdersList;
