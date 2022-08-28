import React from 'react'
import styled from 'styled-components'

function Menu({children}) {
    const StyledMenu = styled.ul`
        width: 36rem;
        display: flex;
        align-items: center;
        list-style-type: none;
    `
  return (
    <StyledMenu>
        {children}
    </StyledMenu>
  )
}

export default Menu