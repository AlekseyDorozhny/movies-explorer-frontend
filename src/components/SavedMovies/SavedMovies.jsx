import React from 'react';
import './SavedMovies.css';

import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({savedMovies, deleteMovie}) {

  return(
    <div className='movies movies_type_saved'>
      <div className='movies__head-panel'>
        <SearchForm />
      </div>
      <MoviesCardList
      cardsData = {savedMovies}
      deleteMovie = {deleteMovie}
      type = 'savedMovies'
      />
    </div>
  )
}

export default SavedMovies;
