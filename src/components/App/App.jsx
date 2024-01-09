import React from "react";
import {Route, Routes, useNavigate} from 'react-router-dom';

import './App.css';

import ProtectedRouteElement from "../ProtectedRoute/ProtectedRoute";
import ProtectedRouteProfileElement from "../../ProtectedRouteProfile/ProtectedRouteProfile";

import {CurrentUserContext} from '../../contexts/CurrentUserContext.js';
import {CurrentSavedMovieContext} from '../../contexts/CurrentSavedMovie.js'

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
  const [currentUser, changeCurrentUser] = React.useState({});
  const [activeName, changeActiveName] = React.useState('');
  const [activeEmail, changeActiveEmail] = React.useState('');
  const [savedMovies, getSavedMovies] = React.useState([]);
  const [savedMovie, changeSavedMovie] = React.useState({});

  React.useEffect(() => {
    tokenCheck();
  }, [])

  React.useEffect(() => {
    getSavedMoviesData();
  }, [])

  const navigate = useNavigate();

  function tokenCheck() {
    if (localStorage.getItem('jwt')){
      const token = localStorage.getItem('jwt');
      mainApi.tokenCheck(token)
      .then((res)=> {
        changeActiveName(res.name);
        changeActiveEmail(res.email);
        changeCurrentUser({name: res.name, email: res.email})
        changeLoggedStatus(true)
        navigate('/', {replace: true})
        return
      })
      .catch((err) => {console.log(err)})
    }
  }

  function handleRegisterSubmit({name, email, password}) {
    mainApi.registration({name, email, password}).then(() => {
      navigate('/signin', {replace: true});
    })
    .catch((err) => {
      console.log(err);
    })
  }

  function handleLoginSubmit({email, password}) {
    mainApi.login({email, password}).then((res) => {
      if (res){
        tokenCheck();
      } else {
        console.log('Что-то не так с токеном')
      }
    })
    .catch((err) => {console.log(err)})
  }

  function handleLogoutSubmit() {
    mainApi.logout()
    .then((res) => {
      localStorage.removeItem('jwt');
      changeLoggedStatus(false);
      navigate('/', {replace: true});
    })
    .catch((err) => {console.log(err)})
  }

  function handleSaveMovie(data) {
    mainApi.saveMovie(data)
    .then((res) => {changeSavedMovie(res)})
    .then(() => {getSavedMoviesData()})
    .catch((err) => {console.log(err)})
  }

  function getSavedMoviesData() {
    mainApi.getSavedMovies()
    .then((res) => {
      getSavedMovies(res);
    })
    .catch((err) => {console.log(err)})
  }

  function handleDeleteMovie(id) {
    mainApi.deleteMovie(id)
    .then(() => {getSavedMoviesData()})
    .catch((err) => {console.log(err)})
  }


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CurrentSavedMovieContext.Provider value={savedMovie}>
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
                  saveMovie={handleSaveMovie}
                  savedMovies={savedMovies}
                  deleteMovie={handleDeleteMovie}
                />}
              />
              <Route path='/saved-movies'
                element={<ProtectedRouteElement
                  element={SavedMovies}
                  loggedIn={loggedIn}
                  burgerStatus={burgerStatus}
                  onBurger={onBurger}
                  savedMovies={savedMovies}
                  deleteMovie={handleDeleteMovie}
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
        </CurrentSavedMovieContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;


