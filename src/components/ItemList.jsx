import React from 'react'
import styled from 'styled-components';
import Item from './Item';

const StyledGridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem; 
`
const ItemList = ({products}) => {
  return (
    <StyledGridContainer>
        {products.length?products.map((prod)=><Item initial="0" key={prod.id} {...prod} />):<h3>Cargando...</h3>}
    </StyledGridContainer>
  )
}

export default ItemList