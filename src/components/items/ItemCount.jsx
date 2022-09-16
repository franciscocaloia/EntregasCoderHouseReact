import React, { useState } from "react";
import {
  StyledAddButton,
  StyledCountButton,
  StyledItemCount,
  StyledUnitsContainer,
} from "../styled/StyledItems.styled";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [units, setUnits] = useState(parseInt(initial));
  const handleIncrease = () => {
    if (units < stock) {
      setUnits(units + 1);
    }
  };
  const handleDecrease = () => {
    if (units > initial) {
      setUnits(units - 1);
    }
  };
  const handleAdd = () => {
    if (stock) {
      onAdd(units);
      setUnits(initial);
    }
  };
  return (
    <StyledItemCount>
      <StyledUnitsContainer>
        <StyledCountButton
          disabled={units === initial}
          onClick={handleDecrease}
        >
          -
        </StyledCountButton>
        <span>{units}</span>
        <StyledCountButton disabled={units >= stock} onClick={handleIncrease}>
          +
        </StyledCountButton>
      </StyledUnitsContainer>
      <StyledAddButton disabled={!stock} onClick={handleAdd}>
        Agregar al carrito
      </StyledAddButton>
    </StyledItemCount>
  );
};

export default ItemCount;
