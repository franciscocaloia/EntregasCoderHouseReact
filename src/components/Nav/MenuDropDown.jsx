import React from 'react'
import MenuItem from './MenuItem'
import {HiddenMenu,StyledMenuDropDown} from '../Styled/StyledMenuDropDown.styled'


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