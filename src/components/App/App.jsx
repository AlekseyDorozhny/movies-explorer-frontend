import React from "react";
import {Route, Routes, useNavigate} from 'react-router-dom';

import './App.css';

import Promo from '../Promo/Promo';
import StandartPage from "../StandartPage/StandartPage";


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
        element={Promo}
        loggedIn={loggedIn}
        />}
        />
        <Route path='/movies'
        element={<StandartPage
        element={Movies}
        loggedIn={loggedIn}
        />}
        />
        <Route path='/saved-movies'
        element={<StandartPage
        element={SavedMovies}
        loggedIn={loggedIn}
        />}
        />
        <Route path='/profile'
        element={<Promo />}
        />
        <Route path='/signin'
        element={<Login
        onSubmit={handleLoginSubmit}
        />}
        />
        <Route path='/signup'
        element={<Register />}
        />
      </Routes>
    </div>
  );
}

export default App;


