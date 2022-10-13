import { useAuth } from "../../contexts/AuthContext";
import useInput from "../../hooks/inputHook";
import {
  StyledAuthError,
  StyledAuthSuccess,
  StyledCheckoutButton,
  StyledCloseFormButton,
  StyledForm,
  StyledFormBackground,
  StyledInputContainer,
  StyledToggleRegisterButton,
} from "../styled/StyledAuth.styled";
import { StyledGridContainer } from "../styled/StyledUtils.styled";
const Signup = () => {
  const inputNotEmpty = (value) => value.trim() !== "";
  const isEmail = (value) => value.includes("@");
  const {
    signup,
    authError,
    authSuccess,
    showSignup,
    toggleSignup,
    toggleSignin,
  } = useAuth();
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
  } = useInput((value) => value.match(/^[0-9]+$/));
  const {
    value: password,
    inputError: passwordError,
    inputValid: passwordValid,
    inputChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
  } = useInput(inputNotEmpty);
  const {
    value: passwordConfirm,
    inputError: passwordConfirmError,
    inputValid: passwordConfirmValid,
    inputChangeHandler: passwordConfirmChangeHandler,
    inputBlurHandler: passwordConfirmBlurHandler,
  } = useInput((value) => value === password);
  const {
    value: email,
    inputError: emailError,
    inputValid: emailValid,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput((value) => inputNotEmpty(value) && isEmail(value));
  const handleSubmit = (event) => {
    event.preventDefault();
    signup(email, password, firstName, lastName, phone);
  };
  return (
    <>
      {showSignup && (
        <StyledFormBackground>
          <StyledForm onSubmit={handleSubmit}>
            <h2>Registrarse</h2>
            <StyledGridContainer columns="1fr 1fr" gap="1rem">
              <StyledInputContainer>
                <label htmlFor="firstName">Nombre</label>
                <input
                  autoComplete="name"
                  className={firstNameError ? "inputError" : ""}
                  type="text"
                  id="firstName"
                  placeholder="Ingrese aqui su nombre"
                  value={firstName}
                  onChange={firstNameChangeHandler}
                  onBlur={firstNameBlurHandler}
                />
                {firstNameError && (
                  <p className="textError">Ingrese un nombre válido</p>
                )}
              </StyledInputContainer>
              <StyledInputContainer>
                <label htmlFor="lastName">Apellido</label>
                <input
                  autoComplete="name"
                  className={lastNameError ? "inputError" : ""}
                  type="text"
                  id="lastName"
                  placeholder="Ingrese aqui su nombre"
                  value={lastName}
                  onChange={lastNameChangeHandler}
                  onBlur={lastNameBlurHandler}
                />
                {lastNameError && (
                  <p className="textError">Ingrese un apellido válido</p>
                )}
              </StyledInputContainer>
              <StyledInputContainer>
                <label htmlFor="phone">Telefono</label>
                <input
                  className={phoneError ? "inputError" : ""}
                  type="text"
                  id="phone"
                  placeholder="Ingrese aqui su telefono"
                  value={phone}
                  onChange={phoneChangeHandler}
                  onBlur={phoneBlurHandler}
                />
                {phoneError && (
                  <p className="textError">
                    El telefono solo debe contener números
                  </p>
                )}
              </StyledInputContainer>
              <StyledInputContainer>
                <label htmlFor="email">Correo Electronico</label>
                <input
                  autoComplete="email"
                  className={emailError ? "inputError" : ""}
                  type="email"
                  id="email"
                  placeholder="Ingrese aqui su correo"
                  value={email}
                  onChange={emailChangeHandler}
                  onBlur={emailBlurHandler}
                />
                {emailError && (
                  <p className="textError">
                    El correo debe contener el caracter "@"
                  </p>
                )}
              </StyledInputContainer>
              <StyledInputContainer>
                <label htmlFor="password">Contraseña</label>
                <input
                  autoComplete="new-password"
                  className={passwordError ? "inputError" : ""}
                  type="password"
                  id="password"
                  placeholder="Ingrese aqui su contraseña"
                  value={password}
                  onChange={passwordChangeHandler}
                  onBlur={passwordBlurHandler}
                />
                {passwordError && (
                  <p className="textError">Ingrese una contraseña válida</p>
                )}
              </StyledInputContainer>
              <StyledInputContainer>
                <label htmlFor="passwordConfirm">Confirmar contraseña</label>
                <input
                  autoComplete="confirm-password"
                  className={passwordConfirmError ? "inputError" : ""}
                  type="password"
                  id="passwordConfirm"
                  placeholder="Confirme su contraseña"
                  value={passwordConfirm}
                  onChange={passwordConfirmChangeHandler}
                  onBlur={passwordConfirmBlurHandler}
                />
                {passwordConfirmError && (
                  <p className="textError">Las contraseñas deben coincidir</p>
                )}
              </StyledInputContainer>
            </StyledGridContainer>
            <StyledCheckoutButton
              disabled={
                !(
                  firstNameValid &&
                  lastNameValid &&
                  phoneValid &&
                  emailValid &&
                  passwordValid &&
                  passwordConfirmValid
                )
              }
            >
              Registrarse
            </StyledCheckoutButton>
            <p>
              Ya tienes una cuenta?{" "}
              <StyledToggleRegisterButton
                onClick={(event) => {
                  event.preventDefault();
                  toggleSignup();
                  toggleSignin();
                }}
              >
                Iniciar sesión
              </StyledToggleRegisterButton>
            </p>
            <StyledCloseFormButton
              onClick={(event) => {
                event.preventDefault();
                toggleSignup();
              }}
            >
              x
            </StyledCloseFormButton>
          </StyledForm>
        </StyledFormBackground>
      )}
      {authSuccess === "signup" && (
        <StyledAuthSuccess>Cuenta registrada!</StyledAuthSuccess>
      )}
      {authError && <StyledAuthError>{authError}</StyledAuthError>}
    </>
  );
};

export default Signup;
