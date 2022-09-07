import React, { useState } from 'react'
import { StyledAddButton, StyledUnitsContainer } from '../Styled/StyledItems.styled';
import { StyledButton } from '../Styled/StyledUtils.styled'


const ItemCount = ({stock,initial,onAdd}) => {
    const [actualStock, setActualStock] = useState(stock)
    const [units, setUnits] = useState(parseInt(initial));
    const handleIncrease = ()=>{
        if(units<actualStock){
            setUnits(units+1);
        }
    }
    const handleDecrease = ()=>{
        if(units>initial){
            setUnits(units-1);
        }
    }
    const handleAdd = ()=>{
        if (actualStock) {
            onAdd(units);
            setActualStock(actualStock-units);
            setUnits(initial);
        }else{
             console.log(`No queda stock de este producto`);
        }
    }
  return (
        <>
            <StyledUnitsContainer>
                <StyledButton disabled={units===initial}  onClick={handleDecrease}>-</StyledButton>
                <span>{units}</span>
                <StyledButton disabled={units>=actualStock} onClick={handleIncrease}>+</StyledButton>
            </StyledUnitsContainer>
            <StyledAddButton disabled={!actualStock} onClick={handleAdd}>Agregar al carrito</StyledAddButton>
        </>
  )
}

export default ItemCount