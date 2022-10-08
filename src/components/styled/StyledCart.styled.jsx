import styled from "styled-components";
import {
  StyledButton,
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
  display: flex;
  flex-direction: column;
  width: 60%;
  min-width: 45rem;
  ul {
    width: 100%;
    padding: 0;
    margin: 1rem;
  }
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
  margin-top: 1rem;
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
  align-self: center;
`;

export const StyledCheckoutContainer = styled(StyledGridContainer)`
  margin-top: 1rem;
`;

export const StyledCheckoutButton = styled(StyledButton)`
  width: 100%;
  border-radius: 0.5rem;
  height: 3rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.25);
  color: #fff;
  text-align: center;
`;

export const StyledClearButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const StyledClearButton = styled(StyledButton)`
  font-weight: normal;
  padding: 0.5rem;
  &:hover {
    background-color: #ffbfbf;
  }
`;
