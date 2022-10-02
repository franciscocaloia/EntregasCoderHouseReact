import {
  StyledCartLink,
  StyledCartList,
  StyledCartTotal,
  StyledCheckoutLink,
  StyledTotalContainer,
} from "../styled/StyledCart.styled";
import CartItem from "./CartItem";

const CartList = ({ cart }) => {
  return (
    <StyledCartList>
      {cart.items.length ? (
        <ul>
          {cart.items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <StyledTotalContainer columns={`repeat(2,1fr)`} gap={`1rem`}>
            <StyledCartTotal>TOTAL: $ {cart.total}</StyledCartTotal>
            <StyledCheckoutLink to="/checkout">
              Finalizar compra
            </StyledCheckoutLink>
          </StyledTotalContainer>
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
