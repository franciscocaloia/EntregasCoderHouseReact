import React from 'react'
import styled from 'styled-components'
import MenuItem from './MenuItem'

const StyledMenuDropDown = styled.div` 
    
`
const HiddenMenu = styled.ul`
display:none;
${StyledMenuDropDown}:hover &{
    display:block;
    position:absolute;
    padding:0;
    list-style-type:none;
    background-color: #066a96;
}
`

const MenuDropDown = ({content,children}) => {
  return (
        <StyledMenuDropDown>
        <MenuItem content={content} URL="/#"></MenuItem>
        <HiddenMenu>
            {children}
        </HiddenMenu>
        </StyledMenuDropDown>
  )
}

export default MenuDropDown