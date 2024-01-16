import React from 'react';
import './SavedMovies.css';

import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import { findSavedMovies } from '../../utils/MoviesUtil';

function SavedMovies({savedMovies, deleteMovie}) {

  const [searchParams, changeSearchParams] = React.useState({});
  const [cardsData, changeCardsData] = React.useState(savedMovies);
  const [isNotFound, setNotFound] = React.useState(false)

  function searchSavedMovies() {
    setNotFound(false)
    const movies = findSavedMovies(savedMovies, searchParams.name)
    changeCardsData(movies)
    if (movies.length === 0) {
      setNotFound(true)
    }
  }


  return(
    <div className='movies movies_type_saved'>
      <div className='movies__head-panel'>
        <SearchForm
        changeSearchParams = {changeSearchParams}
        searchFunction = {searchSavedMovies}
        />
      </div>
      {(isNotFound)? <p className='movies__notFound'> Ничего не найдено</p> : ''}
      <MoviesCardList
      cardsData = {cardsData}
      deleteMovie = {deleteMovie}
      type = 'savedMovies'
      />
    </div>
  )
}

export default SavedMovies;
