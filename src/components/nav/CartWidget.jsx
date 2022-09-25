import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import { StyledCartCount } from "../styled/StyledCart.styled";
import { StyledMenuItem } from "../styled/StyledNavBar.styled";

const CartWidget = () => {
  const { cart } = useCart();
  const count = cart.reduce((prev, actual) => prev + actual.units, 0);
  return (
    <StyledMenuItem>
      <Link to="/cart">
        <img src="/assets/cart.svg" alt="cart logo"></img>
      </Link>
      {count ? <StyledCartCount>{count}</StyledCartCount> : <></>}
    </StyledMenuItem>
  );
};

export default CartWidget;
