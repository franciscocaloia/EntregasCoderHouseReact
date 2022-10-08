import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import { StyledContainer } from "../styled/StyledUtils.styled";

const UserProfile = () => {
  const { currentUser } = useAuth();
  console.log(currentUser);
  return (
    <StyledContainer>
      {currentUser ? (
        <div>
          <p>{currentUser.displayName}</p>
        </div>
      ) : (
        <h3>Inicie sesión para ver los datos de su cuenta</h3>
      )}
    </StyledContainer>
  );
};

export default UserProfile;
