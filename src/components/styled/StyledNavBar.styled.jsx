import styled from "styled-components";
import { StyledContainer } from "./StyledUtils.styled";

export const StyledNavBar = styled.nav`
  position: relative;
  background-color: #066a96;
  height: 4rem;
  z-index: 20;
`;
export const StyledMenu = styled.ul`
  height: 100%;
  width: 36rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  list-style-type: none;
  margin: 0;
`;
export const StyledMenuItem = styled.li`
  position: relative;
  width: 9rem;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    font-size: 1rem;
    line-height: 2rem;
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
    color: #eee;
    padding: 1rem;
    text-decoration: none;
    color: #eee;
    transition: all 0.5s ease 0s;
  }
  a:hover {
    background-color: #274874;
  }
`;
export const StyledMenuDropDown = styled.div``;
export const HiddenMenu = styled.ul`
  display: none;
  ${StyledMenuDropDown}:hover & {
    display: block;
    position: absolute;
    padding: 0;
    list-style-type: none;
    background-color: #066a96;
  }
`;
export const StyledLogo = styled.div`
  display: flex;
  h1 {
    color: ${({ theme }) => theme.colors.white};
    line-height: 3rem;
    margin: 0.5rem;
    font-weight: 400;
  }
`;
export const StyledNavContainer = styled(StyledContainer)`
  display: flex;
  justify-content: space-between;
`;
