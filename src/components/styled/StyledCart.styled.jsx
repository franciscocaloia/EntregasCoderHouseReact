import { Link } from "react-router-dom";
import styled from "styled-components";
import { StyledContainer } from "./StyledUtils.styled";

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

export const StyledCartTotal = styled(StyledCartLi)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
`;

export const StyledCartLink = styled(Link)`
  background-color: #fff;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.25);
  border-radius: 0.5rem;
  padding: 1rem;
  text-decoration: none;
  color: #444;
  line-height: 1.5rem;
  margin: 1rem 0;
`;
