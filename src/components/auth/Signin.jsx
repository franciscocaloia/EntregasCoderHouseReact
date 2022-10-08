import { useAuth } from "../../contexts/AuthContext";
import useInput from "../../hooks/inputHook";
import {
  StyledAuthError,
  StyledCheckoutButton,
  StyledCloseFormButton,
  StyledForm,
  StyledFormBackground,
  StyledInputContainer,
  StyledToggleRegisterButton,
} from "../styled/StyledAuth.styled";
const Signin = () => {
  const inputNotEmpty = (value) => value.trim() !== "";
  const isEmail = (value) => value.includes("@");
  const { authError, signin, showSignin, toggleSignin, toggleSignup } =
    useAuth();
  const {
    value: email,
    inputError: emailError,
    inputValid: emailValid,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput((value) => inputNotEmpty(value) && isEmail(value));
  const {
    value: password,
    inputError: passwordError,
    inputValid: passwordValid,
    inputChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
  } = useInput(inputNotEmpty);
  const handleSubmit = (event) => {
    event.preventDefault();
    signin(email, password);
  };
  return (
    <>
      {showSignin && (
        <StyledFormBackground>
          <StyledForm onSubmit={handleSubmit}>
            <h2>Iniciar sesión</h2>
            <StyledInputContainer>
              <label htmlFor="email">Correo Electronico</label>
              <input
                autoComplete="username"
                className={emailError ? "inputError" : ""}
                type="email"
                id="email"
                placeholder="Ingrese aqui su correo"
                value={email}
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
              />
              {emailError && (
                <p className="textError">Ingrese un nombre valido</p>
              )}
            </StyledInputContainer>
            <StyledInputContainer>
              <label htmlFor="password">Contraseña</label>
              <input
                autoComplete="current-password"
                className={passwordError ? "inputError" : ""}
                type="password"
                id="password"
                placeholder="Ingrese aqui su contraseña"
                value={password}
                onChange={passwordChangeHandler}
                onBlur={passwordBlurHandler}
              />
              {passwordError && (
                <p className="textError">Ingrese un nombre valido</p>
              )}
            </StyledInputContainer>
            <StyledCheckoutButton disabled={!(emailValid && passwordValid)}>
              Iniciar sesion
            </StyledCheckoutButton>
            <p>
              No tienes una cuenta?{" "}
              <StyledToggleRegisterButton
                onClick={() => {
                  toggleSignin();
                  toggleSignup();
                }}
              >
                Registrarse
              </StyledToggleRegisterButton>
            </p>
            <StyledCloseFormButton onClick={toggleSignin}>
              x
            </StyledCloseFormButton>
          </StyledForm>
          {authError && <StyledAuthError>{authError}</StyledAuthError>}
        </StyledFormBackground>
      )}
    </>
  );
};

export default Signin;
