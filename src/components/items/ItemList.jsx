import React from "react";
import Item from "./Item";
import { StyledItemList } from "../styled/StyledItems.styled";

const ItemList = ({ products }) => {
  return (
    <StyledItemList columns={`repeat(4,1fr)`} gap={`1.5rem`}>
      {products.length ? (
        products.map((prod) => <Item key={prod.id} {...prod} />)
      ) : (
        <h3>Loading...</h3>
      )}
    </StyledItemList>
  );
};

export default ItemList;
