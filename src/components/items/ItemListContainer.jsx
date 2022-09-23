import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { StyledContainer } from "../styled/StyledUtils.styled";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      setProducts([]);
      const db = getFirestore();
      const q = id
        ? query(collection(db, "items"), where("type", "==", id))
        : query(collection(db, "items"), orderBy("type", "asc"));
      const snapshot = await getDocs(q);
      setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    })();
  }, [id]);
  return (
    <StyledContainer>
      <h2>Catalogo de productos</h2>
      <ItemList products={products} />
    </StyledContainer>
  );
};

export default ItemListContainer;
