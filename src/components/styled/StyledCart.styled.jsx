import styled from "styled-components";
import {
  StyledBlueButton,
  StyledContainer,
  StyledGridContainer,
  StyledLink,
} from "./StyledUtils.styled";

export const StyledCartCount = styled.span`
  position: absolute;
  bottom: 1rem;
  right: 2.5rem;
  border-radius: 50%;
  background-color: #910808;
  height: 1.3rem;
  width: 1.3rem;
  text-align: center;
  line-height: 1.3rem;
  font-size: 0.7rem;
  color: #fff;
`;

export const StyledCartContainer = styled(StyledContainer)`
  width: 60%;
  min-width: 45rem;
`;

export const StyledCartList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledCartLi = styled.li`
  list-style-type: none;
  border-radius: 0.5rem;
  background-color: #fff;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.25);
  height: 6rem;
  margin: 1rem;
  padding: 1rem;
`;
export const StyledCartItem = styled(StyledCartLi)`
  display: grid;
  grid-template-columns: 10rem 1fr repeat(3, 5rem);
  align-items: center;
  justify-content: space-between;
  .imageContainer,
  .nameContainer,
  .priceContainer,
  .unitsContainer,
  .buttonContainer {
    height: 4rem;
    display: flex;
    align-items: center;
  }
  .priceContainer,
  .unitsContainer,
  .buttonContainer {
    justify-content: center;
  }
  .cartImage {
    height: 100%;
  }
  .cartUnits {
    font-size: 0.8rem;
  }
`;
export const StyledTotalContainer = styled(StyledGridContainer)`
  margin: 1rem;
`;
export const StyledCartTotal = styled(StyledCartLi)`
  margin: 0;
  width: 100%;
  text-align: center;
  height: 3rem;
`;

export const StyledCartLink = styled(StyledLink)`
  background-color: #fff;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.25);
  border-radius: 0.5rem;
  padding: 1rem;
  text-decoration: none;
  color: #444;
  line-height: 1.5rem;
  margin: 1rem 0;
`;

export const StyledCheckoutContainer = styled(StyledContainer)`
  max-width: 30rem;
`;

export const StyledForm = styled.form`
  background-color: #fff;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.25);
  border-radius: 0.5rem;
  padding: 1rem;
  margin-top: 4rem;
  font-size: 16px;
  * {
    line-height: 1.5;
  }
`;

export const StyledInputContainer = styled.div`
  height: 7rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
export const StyledCheckoutLink = styled(StyledLink)`
  width: 100%;
  border-radius: 0.5rem;
  height: 3rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.25);
  color: #fff;
  text-align: center;
`;

export const StyledCheckoutButton = styled(StyledBlueButton)`
  width: 100%;
  padding: 1rem;
`;
