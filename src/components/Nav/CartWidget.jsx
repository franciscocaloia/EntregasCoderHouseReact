import React from 'react'
import { StyledMenuItem } from '../Styled/StyledNavBar.styled'

const CartWidget = ({URL}) => {
  return (
    <StyledMenuItem>
        <a href={URL}><img src="./assets/cart.svg" alt='cart logo'></img></a>
    </StyledMenuItem>
  )
}

export default CartWidget