import styled from "styled-components";

export const StyledMenuDropDown = styled.div``
export const HiddenMenu = styled.ul`
    display:none;
        ${StyledMenuDropDown}:hover &{
        display:block;
        position:absolute;
        padding:0;
        list-style-type:none;
        background-color: #066a96;
}
`