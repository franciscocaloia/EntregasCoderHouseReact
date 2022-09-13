import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import dataJSON from "../../products.json"; //https://github.com/public-apis/public-apis
import { StyledContainer } from "../styled/StyledUtils.styled";
import { getProducts } from "../../utils/Utils";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    setProducts([]);
    getProducts(dataJSON)
      .then((res) => {
        setProducts(res.filter((p) => (id ? p.type === id : true)));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <StyledContainer>
      <h2>Catalogo de productos</h2>
      <ItemList products={products} />
    </StyledContainer>
  );
};

export default ItemListContainer;
