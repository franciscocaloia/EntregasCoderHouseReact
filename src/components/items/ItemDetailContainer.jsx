import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { StyledItemDetailContainer } from "../styled/StyledItems.styled";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  /*
    Dentro de este useEffect se realiza el fetching de datos para mostrar 
    la informacion completa del item utilizando los parametros del routing
  */

  useEffect(() => {
    (async () => {
      const db = getFirestore();
      const itemRef = doc(db, "items", id);
      const docSnapshot = await getDoc(itemRef);
      setItem({ id: docSnapshot.id, ...docSnapshot.data() });
    })();
  }, [id]);

  return (
    <StyledItemDetailContainer>
      {item ? <ItemDetail item={item} /> : <h3>Loading...</h3>}
    </StyledItemDetailContainer>
  );
};
export default ItemDetailContainer;
