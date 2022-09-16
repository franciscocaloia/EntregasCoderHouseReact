import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  StyledButton,
  StyledContainer,
  StyledGridContainer,
} from "./StyledUtils.styled";

export const StyledItem = styled.div`
  position: relative;
  height: 22.5rem;
  width: 100%;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.25);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  h2 {
    font-size: 1rem;
    margin: 1rem 2rem 0;
    color: #3a3a3a;
    text-transform: uppercase;
  }
  span {
    position: absolute;
    bottom: 1rem;
    left: 2rem;
    color: #258fcb;
    font-size: 1.8rem;
  }
`;

export const StyledItemLink = styled(Link)`
  text-decoration: none;
  width: 20rem;
  transition: all 0.3s;
  &:hover {
    opacity: 0.9;
    transform: scale(1.05);
  }
`;

export const StyledItemList = styled(StyledGridContainer)`
  margin: 1rem;
  @media (max-width: ${({ theme }) => theme.screenSize.desktop}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.screenSize.large}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.screenSize.tablet}) {
    grid-template-columns: 1fr;
  }
`;
export const StyledCountButton = styled(StyledButton)`
  height: 1.5rem;
  width: 2rem;
`;

export const StyledAddButton = styled(StyledButton)`
  margin: 1rem 0;
  max-width: 10rem;
  height: 1.5rem;
  width: 90%;
  font-size: 0.6rem;
  text-transform: uppercase;
`;

export const StyledUnitsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 10rem;
  width: 90%;
  margin: 1rem 0;
`;

export const StyledItemCount = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 10rem;
`;

export const StyledItemImg = styled.img`
  height: 15rem;
  width: 100%;
  border-radius: 0.5rem;
  object-fit: cover;
`;

export const StyledItemDetailContainer = styled(StyledContainer)`
  z-index: 5;
  display: flex;
  width: 80%;
  height: calc(100vh - 4rem);
  @media (min-width: ${({ theme }) => theme.screenSize.tablet}) {
    width: 60%;
    min-width: 45rem;
  }
`;

export const StyledBackLink = styled(Link)`
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: 0.5rem;
  height: 2rem;
  background-color: #fff;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.25);
  border-radius: 0.5rem;
  text-decoration: none;
  color: #666;
  img {
    width: 1rem;
    transform: rotate(180deg);
  }
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

export const StyledItemDetail = styled.div`
  z-index: 10;
  position: relative;
  display: flex;
  flex-direction: column;
  align-self: center;
  background-color: #fff;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 1rem;
  .itemDetailImg {
    width: 100%;
    border-bottom: 1px solid #ddd;
    display: flex;
    align-items: center;
    img {
      width: 100%;
    }
  }
  .itemDetailInfo {
    position: relative;
    width: 100%;
    padding: 0 1rem 0 2rem;
    display: flex;
    flex-direction: column;
    .itemDetailName {
      font-size: 2.5rem;
      margin: 1rem 0;
    }
    .itemDetailDescription {
      margin: 0 0 2rem;
      color: #666;
    }
    .itemDetailPriceContainer {
      display: flex;
      flex-direction: column;
      align-items: center;
      .itemDetailPrice {
        align-self: center;
        text-align: center;
        width: 100%;
        padding: 1rem;
        margin: 1rem 0;
        background-color: #fff;
        box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.25);
        border-radius: 0.5rem;
        font-size: 1.5rem;
        line-height: 1.5rem;
      }
    }
    .itemDetailStock {
      background-color: ${({ stock }) => {
        if (stock > 7) return "rgba(0, 255, 72, 0.5)";
        if (stock > 4) return "rgba(255, 251, 0, 0.5)";
        if (stock > 0) return "rgba(255, 153, 0, 0.5)";
        return "rgba(255, 30, 0, 0.5)";
      }};
      font-size: 1rem;
      text-align: center;
      box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.25);
      border-radius: 0.5rem;
      padding: 1rem;
      border-radius: 5px;
    }
  }
  @media (min-width: ${({ theme }) => theme.screenSize.tablet}) {
    flex-direction: row;
    .itemDetailImg {
      width: 50%;
      border-bottom: none;
      border-right: 1px solid #ddd;
    }
    .itemDetailInfo {
      width: 50%;
      .itemDetailPriceContainer {
        flex-direction: row;
        justify-content: space-between;
        height: 7rem;
        .itemDetailPrice {
          width: 40%;
        }
      }
    }
  }
`;
