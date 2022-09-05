import styled from "styled-components";

export const StyledGridContainer = styled.div`
    display:grid;
    grid-template-columns:${({columns})=>columns};
    gap:${({gap})=>gap?gap:0};
`
export const StyledButton = styled.button`
    background-color:#fff;
    box-shadow:0 0 0.5rem  rgba(0,0,0,0.25);
    border:none;
    height:1.5rem;
    width:2rem;
    border-radius:0.5rem;
    font-weight:bold;
    font-size:1rem;
    color:#333;
    cursor:pointer;
    &:hover{
        opacity:0.9;
        transform:scale(0.95);
    }
    &:disabled{
        color:#999;
        opacity:0.65;
        cursor:auto;
        &:hover{
            transform:scale(1);
        }
    }
`

export const StyledContainer = styled.div`
height:100%;
max-width: 100rem;
width: 90%;
margin: 0 auto;
`