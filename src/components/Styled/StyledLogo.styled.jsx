import styled from "styled-components"

export const StyledLogo= styled.div`
    display:flex;
    h1{
        color:${({theme})=>theme.colors.white};
        line-height: 3rem;
        margin: 0.5rem;
        font-weight: 400;
    }
`