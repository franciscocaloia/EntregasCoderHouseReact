import React from "react";
import { StyledUserInfo } from "../styled/StyledAuth.styled";

const UserInfo = ({ currentUserInfo, currentUser }) => {
  return (
    <StyledUserInfo>
      <p>Nombre: {currentUserInfo.firstName}</p>
      <p>Apellido: {currentUserInfo.lastName}</p>
      <p>Telefono: {currentUserInfo.phone}</p>
      <p>Correo: {currentUser.email}</p>
    </StyledUserInfo>
  );
};

export default UserInfo;
