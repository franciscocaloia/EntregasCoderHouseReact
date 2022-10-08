import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledGridContainer = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: ${({ columns }) => columns};
  gap: ${({ gap }) => (gap ? gap : 0)};
`;
export const StyledButton = styled.button`
  background-color: #fff;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 0.5rem;
  font-weight: bold;
  font-size: 1rem;
  color: #333;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    opacity: 0.9;
    transform: scale(0.95);
  }
  &:disabled {
    color: #999;
    opacity: 0.65;
    cursor: auto;
    &:hover {
      transform: scale(1);
    }
  }
`;
export const StyledBlueButton = styled(StyledButton)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  &:disabled {
    color: #fff;
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

export const StyledContainer = styled.div`
  height: 100%;
  width: 90%;
  margin: 0 auto;
  position: relative;

  @media (min-width: ${({ theme }) => theme.screenSize.tablet}) {
    max-width: 100rem;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  transition: all 0.3s;
  &:hover {
    opacity: 0.9;
    transform: scale(0.95);
  }
`;
