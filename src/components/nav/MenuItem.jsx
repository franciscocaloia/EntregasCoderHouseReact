import React from "react";
import { Link } from "react-router-dom";
import { StyledMenuItem } from "../styled/StyledNavBar.styled";
const MenuItem = ({ content, URL }) => {
  return (
    <StyledMenuItem>
      <Link to={URL}>{content}</Link>
    </StyledMenuItem>
  );
};

export default MenuItem;
