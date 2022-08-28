import React from 'react'
import styled from 'styled-components'
import MenuItem from './MenuItem'

const StyledMenuDropDown = styled.ul`
    ${MenuItem}{
        display:none;
    }
    &:hover {
        ${MenuItem}{
            display:block;
            position: absolute;
        }
       
    }
`

const MenuDropDown = ({children}) => {
  return (
    <StyledMenuDropDown>
        {children}
    </StyledMenuDropDown>
  )
}

export default MenuDropDown