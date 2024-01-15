import React from "react";
import './Register.css';
import PageWithForm from "../PageWithForm/PageWithForm.jsx";
import useFormWithValidation from "../../hooks/useFormValidation.js";

function Register({onSubmit}) {

  const { errors, isValid, handleChange, resetForm } = useFormWithValidation();

  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  function handleNameChange(e) {
    setName(e.target.value);
    handleChange(e)
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
    handleChange(e)
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
    handleChange(e)
  }

  function handleSubmit(e) {
    e.preventDefault();
    resetForm()
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
    onSubmit = {handleSubmit}
    isValid = {isValid}>
      <div className="auth__field">
        <p className="auth__input-name">Имя</p>
        <label className="auth__label">
          <input type="text"
          className={`auth__input ${errors.nameRegisterForm? 'auth__input_error' : ''}`}
          id="name-register-input"
          placeholder="Имя"
          name="nameRegisterForm"
          required
          onChange={handleNameChange}
          value={name}/>
          <span className={`auth__error ${errors.nameRegisterForm? 'auth__error_active' : ''}`}>
            {`${errors.nameRegisterForm? errors.nameRegisterForm : ''}`}
          </span>
        </label>
      </div>
      <div className="auth__field">
        <p className="auth__input-name">E-mail</p>
        <label className="auth__label">
          <input type="email"
          className={`auth__input ${errors.emailRegisterForm? 'auth__input_error' : ''}`}
          id="email-register-input"
          placeholder="E-mail"
          name="emailRegisterForm"
          required
          onChange={handleEmailChange}
          value={email}/>
          <span className={`auth__error ${errors.emailRegisterForm? 'auth__error_active' : ''}`}>
          {`${errors.emailRegisterForm? errors.emailRegisterForm : ''}`}
          </span>
        </label>
      </div>
      <div className="auth__field">
        <p className="auth__input-name">Пароль</p>
        <label className="auth__label">
          <input type="password"
          className={`auth__input ${errors.passwordRegisterForm? 'auth__input_error' : ''}`}
          id="password-register-input"
          placeholder="Пароль"
          name="passwordRegisterForm"
          autoComplete="newPassword"
          required
          onChange={handlePasswordChange}
          value={password}/>
          <span className={`auth__error ${errors.passwordRegisterForm? 'auth__error_active' : ''}`}>
          {`${errors.passwordRegisterForm? errors.passwordRegisterForm : ''}`}
          </span>
        </label>
      </div>
    </PageWithForm>
  )
}

export default Register;
