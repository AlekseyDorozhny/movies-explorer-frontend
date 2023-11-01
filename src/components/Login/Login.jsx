import React from "react";
import './Login.css';
import PageWithForm from "../PageWithForm/PageWithForm.jsx";

function Login({onSubmit}) {

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit();
  }

  return (
    <PageWithForm
    name = {'login'}
    heading = {'Рады видеть!'}
    buttonText = {'Войти'}
    subtitleText = {'Ещё не зарегистрированы? '}
    linkText = {'Регистрация'}
    linkPath = {'/signup'}
    onSubmit = {handleSubmit}>
      <label className="auth__field">
        <p className="auth__input-name">E-mail</p>
        <input type="email"
        className="auth__input login__input_type_email"
        id="email-login-input"
        placeholder=""
        name="emailLoginForm"
        required />
        <span className="auth__error email-input-error">Какая-то ошибка</span>
      </label>
      <label className="auth__field">
        <p className="auth__input-name">Пароль</p>
        <input type="password"
          className="auth__input login__input_type_password"
          id="password-login-input"
          placeholder=""
          name="passwordLoginForm"
          required/>
        <span className="auth__error password-input-error">Какая-то ошибка</span>
      </label>
    </PageWithForm>
  )
}

export default Login;
