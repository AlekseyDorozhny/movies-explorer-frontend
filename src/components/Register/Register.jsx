import React from "react";
import './Register.css';
import PageWithForm from "../PageWithForm/PageWithForm.jsx";

function Register({onSubmit}) {

  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({name, email, password});
  }

  return (
    <PageWithForm
    name = {'register'}
    heading = {'Добро пожаловать!'}
    buttonText = {'Зарегистрироваться'}
    subtitleText = {'Уже зарегистрированы? '}
    linkText = {'Войти'}
    linkPath = {'/signin'}
    onSubmit = {handleSubmit}>
      <div className="auth__field">
        <p className="auth__input-name">Имя</p>
        <label className="auth__label">
          <input type="text"
          className="auth__input"
          id="name-register-input"
          placeholder="Имя"
          name="nameRegisterForm"
          required
          onChange={handleNameChange}
          value={name}/>
          <span className="auth__error email-input-error">Какая-то ошибка</span>
        </label>
      </div>
      <div className="auth__field">
        <p className="auth__input-name">E-mail</p>
        <label className="auth__label">
          <input type="email"
          className="auth__input"
          id="email-register-input"
          placeholder="E-mail"
          name="emailregisterForm"
          required
          onChange={handleEmailChange}
          value={email}/>

          <span className="auth__error email-input-error">Какая-то ошибка</span>
        </label>
      </div>
      <div className="auth__field">
        <p className="auth__input-name">Пароль</p>
        <label className="auth__label">
          <input type="password"
          className="auth__input"
          id="password-register-input"
          placeholder="Пароль"
          name="passwordRegisterForm"
          autoComplete="newPassword"
          required

          onChange={handlePasswordChange}
          value={password}/>
        <span className="auth__error password-input-error">Какая-то ошибка</span>
        </label>
      </div>
    </PageWithForm>
  )
}

export default Register;
