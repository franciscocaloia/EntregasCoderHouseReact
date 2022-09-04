import React, { useState } from 'react'
import styled from 'styled-components'
const StyledUnitsContainer = styled.div`
    display:flex;
    justify-content:space-around;
    max-width:10rem;
    width:60%;
`
const StyledButton = styled.button`
    background-color:#066a96;
    border:none;
    height:1.5rem;
    width:2rem;
    border-radius:0.5rem;
    font-weight:bold;
    font-size:1rem;
    color:#eee;
    cursor:pointer;
    &:hover{
        background-color: #274874;
    }
    &:disabled{
        background-color:#4dc9ff;
        cursor:auto;
    }
`

const StyledAddButton = styled.button`
background-color:#066a96;
border:none;
margin:0.5rem;
height:1.5rem;
width:90%;
border-radius:0.5rem;
font-weight:bold;
font-size:1rem;
color:#eee;
cursor:pointer;
&:hover{
    background-color: #274874;
}
&:disabled{
    background-color:#4dc9ff;
    cursor:auto;
}
`
const ItemCount = ({stock,initial,onAdd}) => {
    const [actualStock, setActualStock] = useState(stock)
    const [units, setUnits] = useState(parseInt(initial));
    const handleIncrease = ()=>{
        if (actualStock > 0 ) {
            setUnits(units+1);
        }
    }
    const handleDecrease = ()=>{
        if(units>0){
            setUnits(units-1);
        }
    }
    const handleAdd = ()=>{
        if (units<=actualStock) {
            onAdd(units);
            setActualStock(actualStock-units);
            setUnits(0);
        }else{
             console.log(`Solo quedan ${actualStock} unidades en stock`);
        }
       
    }
  return (
        <>
        <StyledUnitsContainer>
            <StyledButton disabled={!units}  onClick={handleDecrease}>-</StyledButton>
            <span>{units}</span>
            <StyledButton disabled={!actualStock} onClick={handleIncrease}>+</StyledButton>
        </StyledUnitsContainer>
            <StyledAddButton onClick={handleAdd}>Agregar al carrito</StyledAddButton>
        </>
  )
}

export default ItemCount