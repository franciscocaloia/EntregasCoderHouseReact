import { doc, getDoc, getFirestore } from "firebase/firestore";
import React, { useState } from "react";
import useInput from "../../hooks/inputHook";
import {
  StyledOrderContainer,
  StyledOrderForm,
  StyledOrderFormButton,
  StyledOrderInputContainer,
} from "../styled/StyledOrder.styled";
import UserOrder from "./UserOrder";

const OrderContainer = () => {
  const {
    value: orderIdValue,
    inputError: orderError,
    inputValid: orderValid,
    inputChangeHandler: orderChangeHandler,
    inputBlurHandler: orderBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const [order, setOrder] = useState();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setOrder();
    const db = getFirestore();
    const orderRef = doc(db, "orders", orderIdValue);
    const docSnapshot = await getDoc(orderRef);
    if (docSnapshot.exists()) {
      setOrder({ id: docSnapshot.id, ...docSnapshot.data() });
    } else {
      setOrder({});
    }
    setLoading(false);
  };

  return (
    <StyledOrderContainer>
      <h2>Buscar Orden</h2>
      <StyledOrderForm onSubmit={handleSubmit}>
        <StyledOrderFormButton disabled={!orderValid}>
          Buscar
        </StyledOrderFormButton>
        <StyledOrderInputContainer>
          <input
            className={orderError ? "inputError" : ""}
            type="text"
            id="order"
            placeholder="Ingrese aqui el ID de su orden"
            value={orderIdValue}
            onChange={orderChangeHandler}
            onBlur={orderBlurHandler}
          />
          {orderError && <p className="textError">Ingrese un ID válido</p>}
        </StyledOrderInputContainer>
      </StyledOrderForm>
      {loading ? (
        <h3>Loading...</h3>
      ) : order ? (
        Object.keys(order).length !== 0 ? (
          <UserOrder order={order} />
        ) : (
          <p>No se ha encontrado ninguna orden con ese ID</p>
        )
      ) : null}
    </StyledOrderContainer>
  );
};

export default OrderContainer;
