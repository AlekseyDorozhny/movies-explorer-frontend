import React from "react";
import './Login.css';
import PageWithForm from "../PageWithForm/PageWithForm.jsx";
import useFormWithValidation from "../../hooks/useFormValidation.js";

function Login({onSubmit, resError, changeResError}) {

  const { errors, isValid, handleChange, resetForm } = useFormWithValidation();

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  function handleEmailChange(e) {
    changeResError({})
    setEmail(e.target.value);
    handleChange(e)
  }

  function handlePasswordChange(e) {
    changeResError({})
    setPassword(e.target.value);
    handleChange(e)
  }

  function handleSubmit(e) {
    e.preventDefault();
    resetForm()
    onSubmit({email, password});
  }

  return (
    <PageWithForm
    name = {'login'}
    heading = {'Рады видеть!'}
    buttonText = {'Войти'}
    subtitleText = {'Ещё не зарегистрированы? '}
    linkText = {'Регистрация'}
    linkPath = {'/signup'}
    onSubmit = {handleSubmit}
    isValid = {isValid}
    resError = {resError}
    changeResError={changeResError}
    >
      <div className="auth__field">
        <p className="auth__input-name">E-mail</p>
        <label className="auth__label">
          <input type="email"
          className={`auth__input ${errors.emailLoginForm? 'auth__input_error' : ''}`}
          id="email-login-input"
          placeholder="E-mail"
          name="emailLoginForm"
          pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
          required
          onChange={handleEmailChange}
          value={email}/>
          <span
          className={`auth__error ${errors.emailLoginForm?
          'auth__error_active' : ''}`}>
            {`${errors.emailLoginForm? errors.emailLoginForm : ''}`}
          </span>
        </label>
      </div>
      <div className="auth__field">
        <p className="auth__input-name">Пароль</p>
        <label className="auth__label">
        <input type="password"
            className={`auth__input ${errors.passwordLoginForm? 'auth__input_error' : ''}`}
            id="password-login-input"
            placeholder="Пароль"
            name="passwordLoginForm"
            autoComplete="carrentPassword"
            required
            onChange={handlePasswordChange}
            minLength={8}
            value={password}/>
          <span className={`auth__error ${errors.passwordLoginForm? 'auth__error_active' : ''}`}>
            {`${errors.passwordLoginForm? errors.passwordLoginForm : ''}`}
          </span>
      </label>
      </div>
    </PageWithForm>
  )
}

export default Login;
