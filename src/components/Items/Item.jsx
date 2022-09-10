import {
  StyledItem,
  StyledItemImg,
  StyledItemLink,
} from "../styled/StyledItems.styled";

const Item = ({ id, name, price, img }) => {
  return (
    <StyledItemLink to={`/items/${id}`}>
      <StyledItem>
        <StyledItemImg src={img} />
        <h2>{name}</h2>
        <span>${price}</span>
      </StyledItem>
    </StyledItemLink>
  );
};

export default Item;
