import React from "react";
import { Link } from "react-router-dom";
import { StyledLogo } from "../styled/StyledNavBar.styled";

const Logo = () => {
  return (
    <Link style={{ textDecoration: "none" }} to="/">
      <StyledLogo>
        <img src="../assets/arduino.svg" alt="logoarduino"></img>
        <h1>
          Kloi<b>Arduino</b>
        </h1>
      </StyledLogo>
    </Link>
  );
};

export default Logo;
