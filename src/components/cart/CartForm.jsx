import React from "react";
import { useNavigate } from "react-router-dom";
import useInput from "../../hooks/inputHook";
import {
  StyledCheckoutButton,
  StyledForm,
  StyledInputContainer,
} from "../styled/StyledCart.styled";
const CartForm = ({ onFormSubmit }) => {
  const navigate = useNavigate();
  const inputNotEmpty = (value) => value.trim() !== "";
  const isEmail = (value) => value.includes("@");
  const {
    value: firstName,
    inputError: firstNameError,
    inputValid: firstNameValid,
    inputChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
  } = useInput(inputNotEmpty);
  const {
    value: lastName,
    inputError: lastNameError,
    inputValid: lastNameValid,
    inputChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
  } = useInput(inputNotEmpty);
  const {
    value: phone,
    inputError: phoneError,
    inputValid: phoneValid,
    inputChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
  } = useInput(inputNotEmpty);
  const {
    value: email,
    inputError: emailError,
    inputValid: emailValid,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput((value) => inputNotEmpty(value) && isEmail(value));
  const handleSubmit = (event) => {
    event.preventDefault();
    onFormSubmit({ firstName, lastName, phone, email });
    navigate("/");
  };
  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInputContainer>
        <label htmlFor="firstName">Nombre</label>
        <input
          className={firstNameError && "inputError"}
          type="text"
          id="firstName"
          placeholder="Ingrese aqui su nombre"
          value={firstName}
          onChange={firstNameChangeHandler}
          onBlur={firstNameBlurHandler}
        />
        {firstNameError && (
          <p className="textError">Ingrese un nombre valido</p>
        )}
      </StyledInputContainer>
      <StyledInputContainer>
        <label htmlFor="lastName">Apellido</label>
        <input
          className={lastNameError && "inputError"}
          type="text"
          id="lastName"
          placeholder="Ingrese aqui su apellido"
          value={lastName}
          onChange={lastNameChangeHandler}
          onBlur={lastNameBlurHandler}
        />
        {lastNameError && <p className="textError">Ingrese un nombre valido</p>}
      </StyledInputContainer>
      <StyledInputContainer>
        <label htmlFor="phone">Telefono</label>
        <input
          className={phoneError && "inputError"}
          type="text"
          id="phone"
          placeholder="Ingrese aqui su telefono"
          value={phone}
          onChange={phoneChangeHandler}
          onBlur={phoneBlurHandler}
        />
        {phoneError && <p className="textError">Ingrese un nombre valido</p>}
      </StyledInputContainer>
      <StyledInputContainer>
        <label htmlFor="email">Correo Electronico</label>
        <input
          className={emailError && "inputError"}
          type="email"
          id="email"
          placeholder="Ingrese aqui su correo"
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailError && <p className="textError">Ingrese un nombre valido</p>}
      </StyledInputContainer>
      <StyledCheckoutButton
        disabled={
          !(firstNameValid && lastNameValid && phoneValid && emailValid)
        }
      >
        Finalizar compra
      </StyledCheckoutButton>
    </StyledForm>
  );
};

export default CartForm;
