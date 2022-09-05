import React, { useState } from 'react'
import { StyledAddButton, StyledUnitsContainer } from '../Styled/StyledItems.styled';
import { StyledButton } from '../Styled/StyledUtils.styled'


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