import React from "react";
import { HiddenMenu, StyledMenuItem } from "../styled/StyledNavBar.styled";
import { useAuth } from "../../contexts/AuthContext";
import MenuItem from "./MenuItem";
const UserWidget = () => {
  const { currentUser, logout, toggleSignin } = useAuth();
  return (
    <>
      {currentUser ? (
        <>
          <StyledMenuItem>
            <img src="/assets/userIcon.svg" alt="user icon" />
            <HiddenMenu>
              <MenuItem URL="/userProfile" content="Perfil" />
              <StyledMenuItem>
                <button onClick={logout}>LogOut</button>
              </StyledMenuItem>
            </HiddenMenu>
          </StyledMenuItem>
        </>
      ) : (
        <StyledMenuItem>
          <button onClick={toggleSignin}>Iniciar sesión</button>
        </StyledMenuItem>
      )}
    </>
  );
};

export default UserWidget;
