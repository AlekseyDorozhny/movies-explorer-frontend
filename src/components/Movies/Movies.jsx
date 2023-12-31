import React from 'react';
import './Movies.css';

import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import {moviesData} from '../../utils/constants'

function Movies() {
  return(
    <div className='movies'>
      <div className='movies__head-panel'>
        <SearchForm />
      </div>
      <MoviesCardList
      cardsData = {moviesData}
      type = 'movies'
      />
      <button className='movies__button' type='button'>Ещё</button>
    </div>
  )
}

export default Movies;
