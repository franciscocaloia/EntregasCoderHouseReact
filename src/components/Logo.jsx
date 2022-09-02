import React from 'react'
import styled from 'styled-components'
const StyledH1= styled.h1`
    color:#eee;
    line-height: 3rem;
    margin: 0.5rem;
    font-weight: 400;
`
const StyledDiv = styled.div`
    display:flex;
`

const Logo = () => {
  return (
    <StyledDiv>
        <img src="./assets/arduino.svg" alt="logoarduino"></img>
        <StyledH1>Kloi<b>Arduino</b></StyledH1>
    </StyledDiv>
  )
}

export default Logo