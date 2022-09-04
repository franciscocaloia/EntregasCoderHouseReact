import styled from 'styled-components'
import ItemCount from './ItemCount'
const StyledDiv = styled.div`
    padding:1rem;
    border-radius: 0.5rem;
    border: 1px solid #066a96;
    display:flex;
    flex-direction:column;
    align-items:center;
    h4{
        text-align:center;
    }
`


const Item = ({name,price,stock,initial}) => {
    
  return (
    <StyledDiv>
        <h3>{name}</h3>
        <h4>{price}</h4>
        <ItemCount stock={stock} initial={initial} onAdd={(units)=>{console.log(`Has comprado ${units} unidades del producto ${name}`)}}/>
    </StyledDiv>
  )
}

export default Item