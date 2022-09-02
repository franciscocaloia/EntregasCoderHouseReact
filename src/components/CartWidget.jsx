import React from 'react'
import styled from 'styled-components'


const CartWidget = ({URL}) => {
    const StyledMenuItem = styled.li`
    width: 9rem;
`
const StyledImg = styled.img`
    
`
const StyledContent = styled.a`
   font-size: 1rem;
   line-height: 2rem;
   font-weight: 600;
   text-transform: uppercase;
   text-align: center;
   color:#eee;
   display: block;
   padding: 1rem;
   text-decoration: none;
   color: $white-color;
   transition: all 0.5s ease 0s;
   &:hover{
     background-color:#274874;
   }
`
  return (
    <StyledMenuItem>
        <StyledContent href={URL}><StyledImg src="./assets/cart.svg"></StyledImg></StyledContent>
    </StyledMenuItem>
  )
}

export default CartWidget