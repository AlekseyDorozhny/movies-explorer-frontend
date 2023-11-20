import React from "react";
import './Register.css';
import PageWithForm from "../PageWithForm/PageWithForm.jsx";

function register({onSubmit}) {

  return (
    <PageWithForm
    name = {'register'}
    heading = {'Добро пожаловать!'}
    buttonText = {'Зарегистрироваться'}
    subtitleText = {'Уже зарегистрированы? '}
    linkText = {'Войти'}
    linkPath = {'/signin'}>
      <div className="auth__field">
        <p className="auth__input-name">Имя</p>
        <label className="auth__label">
          <input type="text"
          className="auth__input"
          id="name-register-input"
          placeholder=""
          name="nameRegisterForm"
          required />
          <span className="auth__error email-input-error">Какая-то ошибка</span>
        </label>
      </div>
      <div className="auth__field">
        <p className="auth__input-name">E-mail</p>
        <label className="auth__label">
          <input type="email"
          className="auth__input"
          id="email-register-input"
          placeholder=""
          name="emailregisterForm"
          required />
          <span className="auth__error email-input-error">Какая-то ошибка</span>
        </label>
      </div>
      <div className="auth__field">
        <p className="auth__input-name">Пароль</p>
        <label className="auth__label">
          <input type="password"
          className="auth__input"
          id="password-register-input"
          placeholder=""
          name="passwordregisterForm"
          required/>
        <span className="auth__error password-input-error">Какая-то ошибка</span>
        </label>
      </div>
    </PageWithForm>
  )
}

export default register;
