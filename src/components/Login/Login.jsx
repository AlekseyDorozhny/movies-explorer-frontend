import React from "react";
import './Login.css';
import PageWithForm from "../PageWithForm/PageWithForm.jsx";

function Login({onSubmit}) {

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
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
    onSubmit = {handleSubmit}>
      <div className="auth__field">
        <p className="auth__input-name">E-mail</p>
        <label className="auth__label">
          <input type="email"
          className="auth__input"
          id="email-login-input"
          placeholder="E-mail"
          name="emailLoginForm"
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
            id="password-login-input"
            placeholder="Пароль"
            name="passwordLoginForm"
            required
            onChange={handlePasswordChange}
            value={password}/>
          <span className="auth__error password-input-error">Какая-то ошибка</span>
      </label>
      </div>
    </PageWithForm>
  )
}

export default Login;
