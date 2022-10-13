import styled from "styled-components";
import { StyledInputContainer } from "./StyledAuth.styled";
import { StyledBlueButton, StyledContainer } from "./StyledUtils.styled";

export const StyledOrderContainer = styled(StyledContainer)`
  @media (min-width: ${({ theme }) => theme.screenSize.tablet}) {
    width: 60%;
    max-width: 45rem;
  }
`;

export const StyledUserOrdersContainer = styled.div`
  padding: 1rem;
  width: 60%;
`;
export const StyledUserOrder = styled.div`
  border-radius: 0.5rem;
  background-color: #fff;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.25);
  padding: 1rem 3rem;
  margin-bottom: 1rem;
`;

export const StyledUserOrderItem = styled.li`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  padding: 1rem;
  border-top: 1px solid #ddd;
  & > * {
    margin: 0;
  }
`;
export const StyledOrderForm = styled.form``;

export const StyledOrderInputContainer = styled(StyledInputContainer)`
  height: auto;
  input {
    margin: 1rem 0;
  }
`;

export const StyledOrderFormButton = styled(StyledBlueButton)`
  padding: 0.5rem;
`;
