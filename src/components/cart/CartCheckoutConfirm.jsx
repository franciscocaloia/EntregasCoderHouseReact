import React from "react";
import { StyledFormBackground } from "../styled/StyledAuth.styled";
import { StyledAlertContainer } from "../styled/StyledCart.styled";

const CartCheckoutConfirm = ({
  currentUser,
  handleConfirmButton,
  handleAccountChangeButton,
  handleCancelButton,
}) => {
  return (
    <StyledFormBackground>
      <StyledAlertContainer>
        <p className="alertText">
          Usted esta por finalizar la compra utilizando la siguiente cuenta:{" "}
          <b>{currentUser.email}</b> Desea continuar?
        </p>
        <div className="alertButtonContainer ">
          <button className="alertButton" onClick={handleConfirmButton}>
            Si, continuar
          </button>
          <button className="alertButton" onClick={handleAccountChangeButton}>
            Cambiar de cuenta
          </button>
          <button className="alertButton" onClick={handleCancelButton}>
            Cancelar
          </button>
        </div>
      </StyledAlertContainer>
    </StyledFormBackground>
  );
};

export default CartCheckoutConfirm;
