import React from 'react';
import './Profile.css';

import Header from '../Header/Header';

import {CurrentUserContext} from '../../contexts/CurrentUserContext.js'

import useFormWithValidation from "../../hooks/useFormValidation.js";

function Profile({ loggedIn, burgerStatus, onBurger, onLogoutClick, updateProfile, resError, changeResError}) {

  const currentUser = React.useContext(CurrentUserContext)

  const { errors, isValid, handleChange, resetForm } = useFormWithValidation();

  const [userName, changeUserName] = React.useState('');
  const [userEmail, changeUserEmail] = React.useState('');
  const [isEdit, changeEditStatus] = React.useState(false);
  const [nameInput, setNameInput] = React.useState(currentUser.name);
  const [emailInput, setEmailInput] = React.useState(currentUser.email);
  const [buttonStatus, setButtonStatus] = React.useState(true)

  React.useEffect(() => {
    changeResError({})
    setNameInput(currentUser.name)
    setEmailInput(currentUser.email)
  }, [])

  React.useEffect(() => {

    if (nameInput === currentUser.name && emailInput === currentUser.email) {
      setButtonStatus(true)
      return
    }
    if (isValid) {
      setButtonStatus(false)
    } else {
      setButtonStatus(true)
    }
  }, [nameInput, emailInput])


  const buttonClassName = (
    buttonStatus? 'profile__button profile__button_inactive' : 'profile__button'
  );

  function handleNameInputChange(e) {
    changeResError({})
    setNameInput(e.target.value);
    handleChange(e)
  }

  function handleEmailInputChange(e) {
    changeResError({})
    setEmailInput(e.target.value);
    handleChange(e)
  }

  React.useEffect(() => {
    if (currentUser) {
      changeUserName(currentUser.name)
      changeUserEmail(currentUser.email)
    }
    changeEditStatus(false)
  }, [currentUser])

  function startEditProfileHandler(e) {
    e.preventDefault();
    changeEditStatus(true);
  }

  async function editProfileHandler(e) {
    e.preventDefault();
    resetForm()
    updateProfile(nameInput, emailInput)
  }

  return(
    <main>
      <Header
      loggedIn = {loggedIn}
      burgerStatus={burgerStatus}
      onBurger={onBurger}
      />
      <form className='profile__form' onSubmit={editProfileHandler}>
        <div className='profile'>
          <h1 className='profile__greetings'>{`Привет, ${userName}!`}</h1>
          <label className='profile__elements'>
            <p className='profile__element'>Имя</p>
            {(isEdit)?
              <input className='profile__element'
              defaultValue={userName}
              onChange={handleNameInputChange}
              required
              name='profileNameForm'
              minLength={2}
              maxLength={30}
              />
              :
              <p className='profile__element'>{userName}</p>
            }
          </label>
          <span className={`profile__error ${errors.profileNameForm? 'auth__error_active' : ''}`}>
          {`${errors.profileNameForm? errors.profileNameForm : ''}`}
          </span>
          <label className='profile__elements'>
            <p className='profile__element'>E-mail</p>
            {(isEdit)?
              <input className='profile__element'
              type='email'
              defaultValue={userEmail}
              onChange={handleEmailInputChange}
              name='profileEmailForm'
              pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
              required
              />
              :
              <p className='profile__element'>{userEmail}</p>
            }
          </label>
          <span className={`profile__error ${errors.profileEmailForm? 'auth__error_active' : ''}`}>
          {`${errors.profileEmailForm? errors.profileEmailForm : ''}`}
          </span>
          {(isEdit)?
            <>
              <span className='profile__res-error'>
              {resError.profile? resError.massage : ''}
              </span>
              <button type='submit'
              className={buttonClassName}
              disabled = {buttonStatus}
              >Сохранить</button>
            </>
            :
            <>
              <span className='profile__res-success'>
              {resError.profileSuccess? resError.profileSuccess : ''}
              </span>
              <button type='button'
              className='profile__link'
              onClick={startEditProfileHandler}
              >Редактировать</button>
              <button  type='button'
              className='profile__link profile__link_type_red'
              onClick={onLogoutClick}
              >Выйти из аккаунта</button>
            </>
          }
        </div>
      </form>
    </main>
  )
}

export default Profile;
