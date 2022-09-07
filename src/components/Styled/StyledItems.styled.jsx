import styled from "styled-components";
import { StyledButton, StyledContainer, StyledGridContainer } from "./StyledUtils.styled";

export const StyledItem = styled.div`
    border-radius: 0.5rem;
    box-shadow:0 0 0.5rem  rgba(0,0,0,0.25);
    background-color:#fff;
    display:flex;
    flex-direction:column;
    align-items:center;
    h3{
        text-transform:uppercase;
    }
    h4{ 
        text-align:center;
    }
`

export const StyledItemList = styled(StyledGridContainer)`
    margin:1rem;
    @media (max-width:1440px) {
      grid-template-columns: repeat(3,1fr);
    }
    @media (max-width:768px) {
      grid-template-columns: repeat(2,1fr);
    }
    @media (max-width:560px) {
      grid-template-columns:1fr;
    }
`

export const StyledItemListContainer = styled(StyledContainer)`
`

export const StyledAddButton = styled(StyledButton)`
margin:1rem;
max-width:10rem;
width:60%;
font-size:0.6rem;
text-transform:uppercase;
`

export const StyledUnitsContainer = styled.div`
    display:flex;
    justify-content:space-between;
    max-width:10rem;
    width:60%;
`
export const StyledItemImg =styled.img`
    height: 15rem;
    max-width:20rem;
    border-radius:0.5rem;
    object-fit: cover;  
`