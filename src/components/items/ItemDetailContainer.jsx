import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { StyledItemDetailContainer } from "../styled/StyledItems.styled";
import dataJSON from "../../products.json";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const getItem = () =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          if (dataJSON) {
            const itemFound = dataJSON.find((p) => p.id === parseInt(id));
            if (itemFound) resolve(itemFound);
          }
          reject("error");
        }, 2000);
      });
    getItem()
      .then((res) => {
        setItem(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  // useEffect(() => {
  //   (async () => {
  //     const response = await getItem();
  //     setProduct(response);
  //   })();
  // }, []);
  return (
    <StyledItemDetailContainer>
      {item ? <ItemDetail item={item} /> : <h3>Loading...</h3>}
    </StyledItemDetailContainer>
  );
};
export default ItemDetailContainer;
