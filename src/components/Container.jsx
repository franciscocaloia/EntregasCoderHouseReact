import React from 'react'
import styled from 'styled-components'
const StyledContainer = styled.div`
    height:100%;
    max-width: 100rem;
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`
const Container = ({children}) => {
  return (
    <StyledContainer>
        {children}
    </StyledContainer>
  )
}

export default Container