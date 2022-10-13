import React, { useEffect } from "react";
import CartWidget from "./CartWidget";
import Logo from "./Logo";
import MenuItem from "./MenuItem";
import {
  HiddenMenu,
  StyledMenu,
  StyledNavBar,
  StyledNavContainer,
} from "../styled/StyledNavBar.styled";
import UserWidget from "./UserWidget";
import { useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import CategoriesContainer from "./CategoriesContainer";

const NavBar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    (async () => {
      const db = getFirestore();
      const snapshot = await getDocs(collection(db, "categories"));
      setCategories(
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    })();
  }, []);
  return (
    <StyledNavBar>
      <StyledNavContainer>
        <Logo />
        <StyledMenu>
          <MenuItem content="tienda" URL="/">
            <HiddenMenu>
              <CategoriesContainer categories={categories} />
            </HiddenMenu>
          </MenuItem>
          <CartWidget />
          <UserWidget />
          <MenuItem content="Buscar Orden" URL="/order" />
        </StyledMenu>
      </StyledNavContainer>
    </StyledNavBar>
  );
};

export default NavBar;
