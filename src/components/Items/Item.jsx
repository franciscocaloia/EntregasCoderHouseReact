import ItemCount from './ItemCount'
import { StyledItem } from '../Styled/StyledItems.styled'

const Item = ({name,price,stock,initial}) => {
    
  return (
    <StyledItem>
        <h3>{name}</h3>
        <h4>{price}</h4>
        <ItemCount stock={stock} initial={initial} onAdd={(units)=>{console.log(`Has comprado ${units} unidades del producto ${name}`)}}/>
    </StyledItem>
  )
}

export default Item