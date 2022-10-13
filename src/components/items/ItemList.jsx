import React from "react";
import Item from "./Item";
import { StyledItemList } from "../styled/StyledItems.styled";

const ItemList = ({ items }) => {
  return (
    <StyledItemList columns={`repeat(4,1fr)`} gap={`1.5rem`}>
      {items.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </StyledItemList>
  );
};

export default ItemList;
