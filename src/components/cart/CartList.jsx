import {
  StyledCartLink,
  StyledCartList,
  StyledCartTotal,
} from "../styled/StyledCart.styled";
import CartItem from "./CartItem";

const CartList = ({ items }) => {
  let total = 0;
  return (
    <StyledCartList>
      {items.length ? (
        <ul>
          {items.map((item) => {
            total += item.price * item.units;
            return <CartItem key={item.id} {...item} />;
          })}
          <StyledCartTotal>TOTAL: ${total}</StyledCartTotal>
        </ul>
      ) : (
        <>
          <span>No hay productos en el carrito</span>
          <StyledCartLink to="/">Ir a la tienda</StyledCartLink>
        </>
      )}
    </StyledCartList>
  );
};

export default CartList;
