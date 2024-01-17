import React from 'react';
import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard';


function MoviesCardList({ cardsData, type, numberOfVisableCards, saveMovie, deleteMovie, searchParams}) {

  const [moviesDataToDraw, setMoviesDataToDraw] = React.useState([])

  React.useEffect(() => {
    filterData()
  }, [searchParams.shorts, cardsData])

  function filterData() {
    if (searchParams.shorts) {
      const filteredMoviesByLenght = cardsData.filter((item) => {
        if (item.duration < 40) {
            return item
        }
      })
      setMoviesDataToDraw(filteredMoviesByLenght);
    } else {
      setMoviesDataToDraw(cardsData);
    }
  }

  return(
    <div className='movies-card-list'>
      <ul className='movies-card-list__container'>
        {(type === 'movies')?
          moviesDataToDraw.slice(0, numberOfVisableCards).map((card, i) => {
            return(<MoviesCard
              allData={card}
              movieImage={card.image.url}
              movieName={card.nameRU}
              length={card.duration}
              savedStatus={card.saved}
              type={type}
              key = {card.id}
              link={card.trailerLink}
              deleteMovie = {deleteMovie}
              saveMovie = {saveMovie}
            />)
          })
        :
        moviesDataToDraw.map((card, i) => {
          return(<MoviesCard
            allData={card}
            movieImage={card.image}
            movieName={card.nameRU}
            length={card.duration}
            savedStatus={card.savedStatus}
            type={type}
            key = {card._id}
            id = {card._id}
            link={card.trailerLink}
            saveMovie = {saveMovie}
            deleteMovie = {deleteMovie}
          />)
        })
        }
      </ul>
    </div>
  )
}

export default MoviesCardList;
