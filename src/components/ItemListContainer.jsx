import React from 'react'
import Container from './Container'

const ItemListContainer = ({content,children}) => {
  return (
    <Container>
        <h2>{content}</h2>
        {children}
    </Container>
  )
}

export default ItemListContainer