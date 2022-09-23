import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { StyledItemDetailContainer } from "../styled/StyledItems.styled";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      const db = getFirestore();
      const itemRef = doc(db, "items", id);
      const snapshot = await getDoc(itemRef);
      setItem({ id: snapshot.id, ...snapshot.data() });
    })();
  }, [id]);
  return (
    <StyledItemDetailContainer>
      {item ? <ItemDetail item={item} /> : <h3>Loading...</h3>}
    </StyledItemDetailContainer>
  );
};
export default ItemDetailContainer;
