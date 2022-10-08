import React from "react";
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
          <MenuItem content="tienda" URL="/">
            <HiddenMenu>
              {showCategories.map((name) => (
                <MenuItem
                  key={name}
                  content={name}
                  URL={`/category/${categories[name]}`}
                ></MenuItem>
              ))}
            </HiddenMenu>
          </MenuItem>
          <CartWidget />
          <UserWidget />
        </StyledMenu>
      </StyledNavContainer>
    </StyledNavBar>
  );
};

export default NavBar;
