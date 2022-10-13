import styled from "styled-components";
import {
  StyledBlueButton,
  StyledButton,
  StyledContainer,
} from "./StyledUtils.styled";

export const StyledFormBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 30;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledForm = styled.form`
  position: relative;
  background-color: #fff;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.25);
  width: 100%;
  max-width: 40rem;
  border-radius: 0.5rem;
  padding: 1rem;
  font-size: 16px;
  * {
    line-height: 1.5;
  }
  h2 {
    line-height: 2;
    text-align: center;
  }
`;

export const StyledInputContainer = styled.div`
  height: 7rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  label {
    margin-left: 0.5rem;
  }
  input {
    width: 100%;
    padding: 0.8em;
    font-size: 0.9em;
    font-family: sans-serif;
    outline: none;
    border: 1px solid #ddd;
    border-radius: 0.5rem;
    background: #f9f9f9;
    transition: background 0.25s, border-color 0.25s, color 0.25s;
    &:focus {
      background: #fff;
    }
  }
  .inputError {
    color: #d40000;
    border-color: #d40000;
    &::placeholder {
      color: #ffbfbf;
    }
  }
  .textError {
    color: #d40000;
    margin-top: 0.5rem;
    font-size: 0.8em;
  }
`;
export const StyledCheckoutButton = styled(StyledBlueButton)`
  width: 100%;
  padding: 1rem;
`;

export const StyledAuthError = styled.div`
  position: fixed;
  z-index: 50;
  bottom: 1rem;
  left: 1rem;
  width: 100%;
  max-width: 30rem;
  line-height: 1.5rem;
  font-size: 16px;
  font-weight: bold;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #d40000;
  background-color: #fd7878;
  color: #fff;
  text-align: center;
  animation: moveRight 5s forwards;
  @keyframes moveRight {
    0% {
      transform: translateX(-120%);
    }
    10% {
      transform: translateX(0);
    }
    90% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-120%);
    }
  }
`;

export const StyledCloseFormButton = styled(StyledButton)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  height: 2rem;
  width: 2rem;
`;

export const StyledToggleRegisterButton = styled.button`
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1rem;
  cursor: pointer;
`;

export const StyledAuthSuccess = styled(StyledAuthError)`
  border-color: #03a523;
  background-color: #19ff46;
`;

export const StyledUserProfileContainer = styled(StyledContainer)`
  position: relative;
  display: flex;
  align-items: flex-start;
`;
export const StyledUserInfoContainer = styled.div`
  padding: 1rem;
  width: 40%;
`;

export const StyledUserInfo = styled.div`
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.25);
  padding: 1rem;
`;
