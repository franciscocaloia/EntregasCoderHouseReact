import React from "react";
import CartWidget from "./CartWidget";
import Logo from "./Logo";
import MenuDropDown from "./MenuDropDown";
import MenuItem from "./MenuItem";
import {
  StyledMenu,
  StyledNavBar,
  StyledNavContainer,
} from "../styled/StyledNavBar.styled";

const NavBar = () => {
  const showCategories = [];
  const categories = {
    placas: "TYPE_BOARD",
    sensores: "TYPE_SENSOR",
  };
  for (const name in categories) {
    showCategories.push(name);
  }
  return (
    <StyledNavBar>
      <StyledNavContainer>
        <Logo />
        <StyledMenu>
          <MenuDropDown content="tienda">
            {showCategories.map((name) => (
              <MenuItem
                key={name}
                content={name}
                URL={`/category/${categories[name]}`}
              ></MenuItem>
            ))}
          </MenuDropDown>
          <CartWidget URL={"/"}></CartWidget>
          <MenuItem content="Nosotros" URL="/"></MenuItem>
          <MenuItem content="contatco" URL="/"></MenuItem>
        </StyledMenu>
      </StyledNavContainer>
    </StyledNavBar>
  );
};

export default NavBar;
