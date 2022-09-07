import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import dataJSON from "../../products.json"; //https://github.com/public-apis/public-apis
import { StyledContainer } from "../Styled/StyledUtils.styled";

const ItemListContainer = ({ content }) => {
  const [products, setProducts] = useState([]);
  const getProducts = (data) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data) {
          resolve(data);
        } else {
          reject("error");
        }
      }, 2000);
    });
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
      <h2>{content}</h2>
      <ItemList products={products} />
    </StyledContainer>
  );
};

export default ItemListContainer;
