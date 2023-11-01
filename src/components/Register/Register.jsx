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
      <label className="auth__field">
        <p className="auth__input-name">Имя</p>
        <input type="text"
        className="auth__input register__input_type_name"
        id="name-register-input"
        placeholder=""
        name="nameRegisterForm"
        required />
        <span className="auth__error email-input-error">Какая-то ошибка</span>
      </label>
      <label className="auth__field">
        <p className="auth__input-name">E-mail</p>
        <input type="email"
        className="auth__input register__input_type_email"
        id="email-register-input"
        placeholder=""
        name="emailregisterForm"
        required />
        <span className="auth__error email-input-error">Какая-то ошибка</span>
      </label>
      <label className="auth__field">
        <p className="auth__input-name">Пароль</p>
        <input type="password"
          className="auth__input register__input_type_password"
          id="password-register-input"
          placeholder=""
          name="passwordregisterForm"
          required/>
        <span className="auth__error password-input-error">Какая-то ошибка</span>
      </label>
    </PageWithForm>
  )
}

export default register;
