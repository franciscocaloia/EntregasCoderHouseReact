import { StyledCartList } from "../styled/StyledCart.styled";
import CartItem from "./CartItem";

const CartList = ({ items }) => {
  return (
    <StyledCartList>
      <ul>
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
    </StyledCartList>
  );
};

export default CartList;
