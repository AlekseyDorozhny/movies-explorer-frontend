import React from 'react';
import './SavedMovies.css';

import SearchForm from '../SearchForm/SearchForm'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import {savedMoviesData} from '../../utils/constants'

function SavedMovies() {
  return(
    <div className='movies movies_type_saved'>
      <div className='movies__head-panel'>
        <SearchForm />
      </div>
      <MoviesCardList
      cardsData = {savedMoviesData}
      type = 'savedMovies'
      />
    </div>
  )
}

export default SavedMovies;
