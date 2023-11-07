import React from "react";
import {Route, Routes, useNavigate} from 'react-router-dom';

import './App.css';

import Main from '../Main/Main';
import StandartPage from "../StandartPage/StandartPage";
import PageNotFound from '../PageNotFound/PageNotFound'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'

import Register from '../Register/Register';
import Login from '../Login/Login'

function App() {
  const [loggedIn, changeLoggedStatus] = React.useState(false)

  const navigate = useNavigate();

  function handleLoginSubmit() {
    console.log('захожу')
    changeLoggedStatus(true);
    navigate('/', {replace: true});
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/'
        element={<StandartPage
        element={Main}
        loggedIn={loggedIn}
        />}
        />
        <Route path='/movies'
        element={<Movies />}
        />
        <Route path='/saved-movies'
        element={<StandartPage
        element={SavedMovies}
        loggedIn={loggedIn}
        />}
        />
        <Route path='/profile'
        element={<Main />}
        />
        <Route path='/signin'
        element={<Login
        onSubmit={handleLoginSubmit}
        />}
        />
        <Route path='/signup'
        element={<Register />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;


