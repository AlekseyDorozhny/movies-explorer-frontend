import React from 'react';
import './Movies.css';

import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import moviesApi from '../../utils/MoviesApi';

import findMovies from '../../utils/MoviesUtil';

function Movies() {

  const [moviesData, changeMoviesData] = React.useState([]);
  const [filtredMoviesData, changeFiltredMoviesData] = React.useState([]);
  const [searchParams, changeSearchParams] = React.useState({});
  const [isSearching, changeSearchStatus] = React.useState(false);

  function searchMovies() {
    changeFiltredMoviesData([])
    changeSearchStatus(true)
    moviesApi.getMovies()
    .then((res) => {
      changeMoviesData(res);
    })
    .then(() => {
      const movies = findMovies(moviesData, searchParams.name, searchParams.shorts)
      console.log(movies[0].image.url)
      changeFiltredMoviesData(movies);
    })
    .then(() => {
      changeSearchStatus(false)
      console.log(filtredMoviesData)
    })
    .catch((err) => {console.log(err)})

  }

  return(
    <div className='movies'>
      <div className='movies__head-panel'>
        <SearchForm
        changeSearchParams = {changeSearchParams}
        searchFunction = {searchMovies}
        />
      </div>
      <MoviesCardList
      cardsData = {filtredMoviesData}
      type = 'movies'
      />
      <button className='movies__button' type='button'>Ещё</button>
    </div>
  )
}

export default Movies;
