import React, { useState } from "react";
import { StyledBackLink, StyledItemDetail } from "../styled/StyledItems.styled";
import ItemCount from "./ItemCount";
import { useCart } from "../../contexts/CartContext";
import { StyledCartLink } from "../styled/StyledCart.styled";

const ItemDetail = ({ item }) => {
  const { name, description, price, stock, img } = item;
  const [unitsCount, setUnitsCount] = useState(0);
  const context = useCart();
  const onAdd = (units) => {
    setUnitsCount(units);
    context.addToCart(item, units);
  };
  return (
    <StyledItemDetail stock={stock - unitsCount}>
      <div className="itemDetailImg">
        <img src={img} alt={name} />
      </div>
      <div className="itemDetailInfo">
        <h2 className="itemDetailName">{name}</h2>
        <p className="itemDetailDescription">{description}</p>
        <div className="itemDetailPriceContainer">
          <span className="itemDetailPrice">${price}</span>
          {unitsCount ? (
            <StyledCartLink to="/cart">Finalizar compra</StyledCartLink>
          ) : (
            <ItemCount initial={1} stock={stock - unitsCount} onAdd={onAdd} />
          )}
        </div>
        <span className="itemDetailStock">{`Quedan ${
          stock - unitsCount
        } unidades en stock`}</span>
      </div>
      <StyledBackLink to={"/"}>
        <img src="/assets/arrow.svg" alt="arrow" />
      </StyledBackLink>
    </StyledItemDetail>
  );
};

export default ItemDetail;
