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
  ul {
    width: 100%;
    padding: 0;
    margin: 1rem;
  }
  @media (min-width: ${({ theme }) => theme.screenSize.tablet}) {
    width: 60%;
    max-width: 45rem;
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
  grid-template-columns: 10rem 1fr repeat(4, 5rem);
  align-items: center;
  justify-content: space-between;
  & > * {
    height: 4rem;
    display: flex;
    align-items: center;
  }
  .priceContainer,
  .unitsContainer,
  .buttonContainer,
  .stockContainer {
    justify-content: center;
  }
  .cartImage {
    height: 100%;
  }
  .cartUnits {
    font-size: 0.8rem;
  }
  .cartStock {
    border: 1px solid #d40000;
    background-color: #fd7878;
    font-size: 0.8rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
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
    background-color: #fd7878;
  }
`;
export const StyledAlertContainer = styled.div`
  background-color: #fff;
  border-radius: 0.5rem;
  width: 100%;
  max-width: 18rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 20rem;
  .alertTitle {
    font-size: 1.5rem;
    text-align: center;
  }
  .alertText {
    line-height: 1.2;
    font-size: 1rem;
    margin: 1rem;
    text-align: justify;
    b {
      display: block;
      text-align: center;
      margin: 1rem 0;
    }
  }
  .alertButtonContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .alertButton {
    width: 100%;
    height: 2rem;
    border: 1px solid ${({ theme }) => theme.colors.primaryDark};
    border-bottom: none;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.primaryDark};
    }
    &:last-child {
      border-bottom-left-radius: 0.5rem;
      border-bottom-right-radius: 0.5rem;
      border-bottom: ${({ theme }) => theme.colors.primaryDark};
    }
  }
`;

export const StyledCloseAlertButton = styled.button`
  height: 3rem;
  width: 100%;
  background-color: ${({ error, success }) => {
    if (error) return "#f65656";
    else if (success) return "#65d266";
    else return "#fff";
  }};
  border: none;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  color: #fff;
  line-height: 1;
  font-size: 1.3rem;
  font-weight: bold;
  cursor: pointer;
`;
