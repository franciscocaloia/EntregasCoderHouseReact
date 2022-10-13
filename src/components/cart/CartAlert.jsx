import React from "react";
import { StyledFormBackground } from "../styled/StyledAuth.styled";
import {
  StyledAlertContainer,
  StyledCloseAlertButton,
} from "../styled/StyledCart.styled";

const CartAlert = ({ cartError, cartSuccess, handleCloseAlert }) => {
  return (
    <>
      {(cartError && !cartSuccess) || (!cartError && cartSuccess) ? (
        <StyledFormBackground>
          <StyledAlertContainer>
            {cartError && (
              <div>
                <h3 className="alertTitle">Error</h3>
                <p className="alertText">{cartError}</p>
              </div>
            )}
            {cartSuccess && (
              <div>
                <h3 className="alertTitle">Compra exitosa!</h3>
                <p className="alertText">
                  Gracias por su compra, podrá ver el estado de su orden usando
                  el siguiente id: <b>"{cartSuccess}"</b> en la seccion "Buscar
                  Orden" o en el apartado de "Mis ordenes" de su perfil.
                </p>
              </div>
            )}
            <StyledCloseAlertButton
              onClick={handleCloseAlert}
              error={cartError}
              success={cartSuccess}
            >
              Entendido
            </StyledCloseAlertButton>
          </StyledAlertContainer>
        </StyledFormBackground>
      ) : null}
    </>
  );
};

export default CartAlert;
