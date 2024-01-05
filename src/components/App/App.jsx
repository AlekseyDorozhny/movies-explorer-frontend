import React from "react";
import {Route, Routes, useNavigate} from 'react-router-dom';

import './App.css';

import ProtectedRouteElement from "../ProtectedRoute/ProtectedRoute";
import ProtectedRouteProfileElement from "../../ProtectedRouteProfile/ProtectedRouteProfile";

import Main from '../Main/Main';
import StandartPage from "../StandartPage/StandartPage";
import PageNotFound from '../PageNotFound/PageNotFound';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';

import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';

import mainApi from "../../utils/MainApi";

function App() {
  const [loggedIn, changeLoggedStatus] = React.useState(false);
  const [burgerStatus, onBurger] = React.useState(false);
  const [activeName, changeActiveName] = React.useState('');
  const [activeEmail, changeActiveEmail] = React.useState('');

  React.useEffect(() => {
  },[burgerStatus])

  React.useEffect(() => {
    tokenCheck();
  },[])

  const navigate = useNavigate();

  function tokenCheck() {
    if (localStorage.getItem('jwt')){
      console.log('проверяю токен')
      const token = localStorage.getItem('jwt');
      mainApi.tokenCheck(token)
      .then((res)=> {
        console.log(res)
        changeActiveName(res.name);
        changeActiveEmail(res.email);
        changeLoggedStatus(true)
        navigate('/', {replace: true})
        return
      })
      .catch((err) => {console.log(err)})
    } else {console.log('Токена нет')};
  }


  function handleRegisterSubmit({name, email, password}) {
    console.log('регистрирую')
    mainApi.registration({name, email, password}).then(() => {
      navigate('/signin', {replace: true});
    })
    .catch((err) => {
      console.log(err);
    })
  }

  function handleLoginSubmit({email, password}) {
    mainApi.login({email, password}).then((res) => {
      console.log(res)
      if (res){
        tokenCheck();
      } else {
        console.log('Что-то не так с токеном')
      }
    })
    .catch((err) => {console.log(err)})
  }

  function handleLogoutSubmit() {
    console.log('выхожу')
    mainApi.logout()
    .then((res) => {
      localStorage.removeItem('jwt');
      changeLoggedStatus(false);
      navigate('/', {replace: true});
    })
    .catch((err) => {console.log(err)})
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/'
        element={<StandartPage
          element={Main}
          loggedIn={loggedIn}
          burgerStatus={burgerStatus}
          onBurger={onBurger}
        />}
        />
        <Route path='/movies'
          element={<ProtectedRouteElement
            element={Movies}
            loggedIn={loggedIn}
            burgerStatus={burgerStatus}
            onBurger={onBurger}
          />}
        />
        <Route path='/saved-movies'
        element={<ProtectedRouteElement
          element={SavedMovies}
          loggedIn={loggedIn}
          burgerStatus={burgerStatus}
          onBurger={onBurger}
        />}
        />
        <Route path='/profile'
        element={<ProtectedRouteProfileElement
          element = {Profile}
          loggedIn={loggedIn}
          burgerStatus={burgerStatus}
          onBurger={onBurger}
          onLogoutClick={handleLogoutSubmit}
          name={activeName}
          email={activeEmail}
        />}
        />
        <Route path='/signin'
        element={<Login
        onSubmit={handleLoginSubmit}
        />}
        />
        <Route path='/signup'
        element={<Register
        onSubmit={handleRegisterSubmit}
        />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;


