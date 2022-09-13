import React, { useState } from "react";
import { StyledBackLink, StyledItemDetail } from "../styled/StyledItems.styled";
import ItemCount from "./ItemCount";

const ItemDetail = ({ name, description, price, stock, img }) => {
  const [actualStock, setActualStock] = useState(stock);
  return (
    <StyledItemDetail stock={actualStock}>
      <div className="itemDetailImg">
        <img src={img} alt={name} />
      </div>
      <div className="itemDetailInfo">
        <h2 className="itemDetailName">{name}</h2>
        <p className="itemDetailDescription">{description}</p>
        <div className="itemDetailPriceContainer">
          <span className="itemDetailPrice">${price}</span>
          <ItemCount
            initial={1}
            stock={actualStock}
            onAdd={(units) => {
              setActualStock(actualStock - units);
              console.log(
                `Has comprado ${units} unidades del producto ${name}`
              );
            }}
          />
        </div>
        <span className="itemDetailStock">{`Quedan ${actualStock} unidades en stock`}</span>
      </div>
      <StyledBackLink to={"/"}>
        <img src="/assets/arrow.svg" alt="arrow" />
      </StyledBackLink>
    </StyledItemDetail>
  );
};

export default ItemDetail;
