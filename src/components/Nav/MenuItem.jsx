import React from 'react'
import { StyledMenuItem } from '../Styled/StyledNavBar.styled'
const MenuItem = ({content,URL}) => {
   
  return (
    <StyledMenuItem>
        <a href={URL}>{content}</a>
    </StyledMenuItem>
  )
}

export default MenuItem