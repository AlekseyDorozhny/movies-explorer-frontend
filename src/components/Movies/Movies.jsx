import React from 'react';
import './Movies.css';

import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import moviesApi from '../../utils/MoviesApi';

import findMovies from '../../utils/MoviesUtil';

function Movies() {

  const [moviesData, changeMoviesData] = React.useState([]);
  const [filtredMoviesData, changeFiltredMoviesData] = React.useState([]);
  const [searchParams, changeSearchParams] = React.useState({});
  const [isSearching, changeSearchStatus] = React.useState(false);
  const [numberOfVisableCards, setNumberOfVisableCards] = React.useState(12);
  const [displaySize, setDisplaySize] = React.useState({
    width: window.innerWidth,
  })

  React.useEffect(() => {
    console.log('серчпарамс')
    console.log(searchParams)
  },[searchParams])

  React.useEffect(() => {
      const resize = () => {
        setDisplaySize({
              width: window.innerWidth,
          })
      }
      window.addEventListener('resize', resize)
  }, [])

  React.useEffect(() => {
    const width = JSON.stringify(displaySize).match(/\d+/g)[0];
    if (width >= 1280) {
      setNumberOfVisableCards(12)
    }
    if (width <= 768) {
      setNumberOfVisableCards(8)
    }
    if (width <= 480) {
      setNumberOfVisableCards(5)
    }
  },[displaySize])

  const getMoreCards = () => {
    const width = JSON.stringify(displaySize).match(/\d+/g)[0];
    if (width >= 1280) {
      const number = numberOfVisableCards + 3;
      setNumberOfVisableCards(number)
    }
    console.log(width)
    if (width <= 1276) {
      const number = numberOfVisableCards + 2;
      setNumberOfVisableCards(number)
    }
  }

  function searchMovies() {
    changeFiltredMoviesData([])
    changeSearchStatus(true)
    moviesApi.getMovies()
    .then((res) => {
      changeMoviesData(res);
    })
    .then(() => {
      console.log(searchParams)
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
      {(isSearching)? <Preloader /> : ''}
      <MoviesCardList
      cardsData = {filtredMoviesData}
      type = 'movies'
      numberOfVisableCards = {numberOfVisableCards}
      />
      <button
      className='movies__button'
      type='button'
      onClick={getMoreCards}
      >Ещё</button>
    </div>
  )
}

export default Movies;
