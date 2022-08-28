import React from 'react'
import styled from 'styled-components'
const StyledMenu = styled.ul`
        height:100%;
        width: 36rem;
        display: flex;
        align-items: center;
        list-style-type: none;
        margin:0;
    `
function Menu({children}){
  return (
    <StyledMenu>
        {children}
    </StyledMenu>
  )
}

export default Menu; 