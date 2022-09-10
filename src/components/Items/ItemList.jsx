import React from "react";
import Item from "./Item";
import { StyledItemList } from "../styled/StyledItems.styled";
import { useParams } from "react-router-dom";

const ItemList = ({ products }) => {
  const { id } = useParams();
  return (
    <StyledItemList columns={`repeat(4,1fr)`} gap={`1.5rem`}>
      {products.length ? (
        products
          .filter((p) => (id ? p.type === id : true))
          .map((prod) => <Item key={prod.id} {...prod} />)
      ) : (
        <h3>Loading...</h3>
      )}
    </StyledItemList>
  );
};

export default ItemList;
