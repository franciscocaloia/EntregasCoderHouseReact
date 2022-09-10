import React, { useState } from "react";
import {
  StyledAddButton,
  StyledItemCount,
  StyledUnitsContainer,
} from "../styled/StyledItems.styled";
import { StyledButton } from "../styled/StyledUtils.styled";

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
        <StyledButton disabled={units === initial} onClick={handleDecrease}>
          -
        </StyledButton>
        <span>{units}</span>
        <StyledButton disabled={units >= stock} onClick={handleIncrease}>
          +
        </StyledButton>
      </StyledUnitsContainer>
      <StyledAddButton disabled={!stock} onClick={handleAdd}>
        Agregar al carrito
      </StyledAddButton>
    </StyledItemCount>
  );
};

export default ItemCount;
