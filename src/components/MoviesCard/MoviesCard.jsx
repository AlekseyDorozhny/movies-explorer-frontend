import React from 'react';
import './MoviesCard.css';

function MoviesCard({movieImage, movieName, length}) {
  return(
    <div className='movies-card'>
      <div className='movies-card__image' style={{background: {movieImage}}}>
        <button className='movies-card__save-button'>Сохранить</button>
        <div className='movies-card__checkbox'></div>
      </div>
      <h3 className='movies-card__name'>{movieName}</h3>
      <p className='movie-card__length'>{length}</p>
    </div>
  )
}

export default MoviesCard;
