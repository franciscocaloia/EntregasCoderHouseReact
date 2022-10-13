import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import { StyledCartCount } from "../styled/StyledCart.styled";
import { StyledMenuItem } from "../styled/StyledNavBar.styled";

const CartWidget = () => {
  const { getItemsCount } = useCart();
  const count = getItemsCount();
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
