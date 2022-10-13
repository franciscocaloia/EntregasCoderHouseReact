import React, { useState } from "react";
import { useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import {
  StyledUserInfoContainer,
  StyledUserProfileContainer,
} from "../styled/StyledAuth.styled";
import UserInfo from "./UserInfo";
import UserOrdersContainer from "../order/UserOrdersContainer";

const UserProfile = () => {
  const { currentUser, getUserInfo } = useAuth();
  const [currentUserInfo, setCurrentUserInfo] = useState(null);
  useEffect(() => {
    (async () => {
      if (currentUser) {
        setCurrentUserInfo(await getUserInfo());
      }
    })();
  }, [currentUser, getUserInfo]);

  return (
    <StyledUserProfileContainer>
      {currentUser ? (
        <>
          {currentUserInfo ? (
            <>
              <StyledUserInfoContainer>
                <h2>Informacion de usuario</h2>
                <UserInfo
                  currentUserInfo={currentUserInfo}
                  currentUser={currentUser}
                ></UserInfo>
              </StyledUserInfoContainer>
              <UserOrdersContainer currentUser={currentUser} />
            </>
          ) : (
            <h3>Loading...</h3>
          )}
        </>
      ) : (
        <h3>Inicie sesión para ver los datos de su cuenta</h3>
      )}
    </StyledUserProfileContainer>
  );
};

export default UserProfile;
