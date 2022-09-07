import ItemCount from "./ItemCount";
import { StyledItem, StyledItemImg } from "../Styled/StyledItems.styled";

const Item = ({ name, price, img }) => {
  return (
    <StyledItem>
      <StyledItemImg src={img} />
      <h3>{name}</h3>
      <h4>{price}</h4>
      <ItemCount
        stock={10}
        initial={1}
        onAdd={(units) => {
          console.log(`Has comprado ${units} unidades del producto ${name}`);
        }}
      />
    </StyledItem>
  );
};

export default Item;
