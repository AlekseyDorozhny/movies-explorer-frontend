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
      <div className="auth__field">
        <p className="auth__input-name">E-mail</p>
        <label className="auth__label">
          <input type="email"
          className="auth__input"
          id="email-login-input"
          placeholder=""
          name="emailLoginForm"
          required />
          <span className="auth__error email-input-error">Какая-то ошибка</span>
        </label>
      </div>
      <div className="auth__field">
        <p className="auth__input-name">Пароль</p>
        <label className="auth__label">
        <input type="password"
            className="auth__input"
            id="password-login-input"
            placeholder=""
            name="passwordLoginForm"
            required/>
          <span className="auth__error password-input-error">Какая-то ошибка</span>
      </label>
      </div>
    </PageWithForm>
  )
}

export default Login;
