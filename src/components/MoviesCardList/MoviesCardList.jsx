import React from 'react';
import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard';


function MoviesCardList({ cardsData, type }) {
  return(
    <div className='movies-card-list'>
      <ul className='movies-card-list__container'>
        {cardsData.map((card, i) => {
          return(<MoviesCard
            movieImage={card.image}
            movieName={card.name}
            length={card.length}
            savedStatus={card.savedStatus}
            type={type}
            key = {card._id}
          />)
        })}
      </ul>
    </div>
  )
}

export default MoviesCardList;
