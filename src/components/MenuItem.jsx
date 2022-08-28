import React from 'react'
import styled from 'styled-components'

const MenuItem = ({content,URL}) => {
    const StyledMenuItem = styled.li`
         width: 25%;
    `
    const StyledContent = styled.a`
        font-size: 1rem;
        line-height: 2rem;
        font-weight: 600;
        text-transform: uppercase;
        text-align: center;
        display: block;
        padding: 1rem;
        text-decoration: none;
        color: $white-color;
        transition: all 0.5s ease 0s;
    `
  return (
    <StyledMenuItem>
        <StyledContent href={URL}>{content}</StyledContent>
    </StyledMenuItem>
  )
}

export default MenuItem