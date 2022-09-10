import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { StyledItemDetailContainer } from "../styled/StyledItems.styled";
import dataJSON from "../../products.json";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const getItem = () =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          if (dataJSON) {
            const item = dataJSON.find((p) => p.id === +id);
            resolve(item);
          } else {
            reject("error");
          }
        }, 2000);
      });
    getItem()
      .then((res) => {
        setProduct(res);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   (async () => {
  //     const response = await getItem();
  //     setProduct(response);
  //   })();
  // }, []);

  return (
    <StyledItemDetailContainer>
      {product ? <ItemDetail {...product} /> : <h3>Loading...</h3>}
    </StyledItemDetailContainer>
  );
};
export default ItemDetailContainer;
