import React from 'react'
import Item from './Item';
import { StyledItemList } from '../Styled/StyledItems.styled';


const ItemList = ({products}) => {
  return (
    <StyledItemList columns={`repeat(4,1fr)`} gap={`10px`}>
        {products.length?products.map((prod)=><Item initial="0" key={prod.id} {...prod} />):<h3>Cargando...</h3>}
    </StyledItemList>
  )
}

export default ItemList