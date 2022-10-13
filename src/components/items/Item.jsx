import { useCart } from "../../contexts/CartContext";
import {
  StyledItem,
  StyledItemImg,
  StyledItemLink,
} from "../styled/StyledItems.styled";

const Item = ({ id, name, price, img }) => {
  const { isInCart } = useCart();
  return (
    <StyledItemLink to={`/items/${id}`}>
      <StyledItem>
        <StyledItemImg src={img} />
        <h2 className="itemName">{name}</h2>
        <span className="itemPrice">${price}</span>
        {isInCart(id) && (
          <span className="itemCart">
            <img src="/assets/cart.svg" alt="cart logo"></img>
          </span>
        )}
      </StyledItem>
    </StyledItemLink>
  );
};

export default Item;
