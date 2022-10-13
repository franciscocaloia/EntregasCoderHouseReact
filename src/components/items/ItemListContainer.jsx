import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { StyledContainer } from "../styled/StyledUtils.styled";
import { useParams } from "react-router-dom";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { StyledCategory } from "../styled/StyledNavBar.styled";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState();
  const { id } = useParams();

  /*
    Dentro de este useEffect se realiza el fetching de datos para mostrar los items y la respectiva categoría
  */

  useEffect(() => {
    (async () => {
      setItems([]);
      const db = getFirestore();
      const q = id
        ? query(collection(db, "items"), where("type", "==", id))
        : query(collection(db, "items"), orderBy("type", "asc"));
      const querySnapshot = await getDocs(q);
      setItems(
        querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
      if (id) {
        const categorySnapshot = await getDoc(doc(db, "categories", id));
        setCategory({ id: categorySnapshot.id, ...categorySnapshot.data() });
      } else {
        setCategory();
      }
    })();
  }, [id]);

  return (
    <StyledContainer>
      <h2>Catalogo de productos</h2>
      {category && <StyledCategory>{category.title}</StyledCategory>}
      {items.length ? <ItemList items={items} /> : <h3>Loading...</h3>}
    </StyledContainer>
  );
};

export default ItemListContainer;
