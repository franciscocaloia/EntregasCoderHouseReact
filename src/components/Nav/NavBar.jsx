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
  return (
    <StyledNavBar>
      <StyledNavContainer>
        <Logo />
        <StyledMenu>
          <MenuDropDown content="tienda">
            <MenuItem content="placas" URL={"/category/TYPE_BOARD"}></MenuItem>
            <MenuItem
              content="sensores"
              URL={"/category/TYPE_SENSOR"}
            ></MenuItem>
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
