import React, { useEffect, useState } from "react";
import { StyledBackLink, StyledItemDetail } from "../styled/StyledItems.styled";
import ItemCount from "./ItemCount";
import { useCart } from "../../contexts/CartContext";
import { StyledCartLink } from "../styled/StyledCart.styled";

const ItemDetail = ({ item }) => {
  const { id, name, description, price, stock, img } = item;
  const [unitsCount, setUnitsCount] = useState(0);
  const { cart, addToCart } = useCart();

  /*
    Dentro de este useEffect se obtiene la cantidad de items que ya se encuentran en el carrito de este mismo item. 
    Esto es para que el usuario no pueda agregar mas productos al carro de los que hay realmente en stock 
    ya que el stock se descuenta unicamente al momento de finalizar la compra.
    (de otra manera el usuario podria volver a entrar al detalle del producto y agregar nuevamente todo el stock disponible cada vez que haga render del componente itemDetail)
  */

  useEffect(() => {
    const itemCart = cart.items.find((i) => i.id === id);
    setUnitsCount(itemCart ? itemCart.units : 0);
  }, [id, cart.items]);

  const onAdd = (units) => {
    setUnitsCount(units);
    addToCart(item, units);
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
