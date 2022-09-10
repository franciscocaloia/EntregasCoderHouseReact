import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import dataJSON from "../../products.json"; //https://github.com/public-apis/public-apis
import { StyledContainer } from "../styled/StyledUtils.styled";
import { getProducts } from "../../utils/Utils";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts(dataJSON)
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <StyledContainer>
      <h2>Catalogo de productos</h2>
      <ItemList products={products} />
    </StyledContainer>
  );
};

export default ItemListContainer;
