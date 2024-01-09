import React from 'react';
import './MoviesCard.css';

function MoviesCard(
  {allData, movieImage, movieName, length, savedStatus, type, link, saveMovie, deleteMovie}) {

  const [SavedStatus, changeSavedStatus] = React.useState(savedStatus);
  console.log(savedStatus)

  const cardStatusClassName = (
    `movies-card__checkbox ${SavedStatus && 'movies-card__checkbox_active'}`
  );

  const cardSaveButtonClassName = (
    `movies-card__save-button ${SavedStatus && 'movies-card__save-button_unactive'}`
  );

  function handleSaveClick() {
    saveMovie(allData)
    changeSavedStatus(true)

  }

  function handleDeleteClick() {
    if (allData.movieId) {
      deleteMovie(allData.movieId);
    } else {
      deleteMovie(allData.id);
      changeSavedStatus(false)
    }
  }

  return(
    <li className='movies-card'>
      {(type !== 'savedMovies')?
       <div className='movies-card__image-container'>
        <a className='movies-card__link' target="_blank" href={link} rel='noreferrer'>
          <img className='movies-card__image'
          alt={`Постер фильма ${movieName}`}
          src = {`https://api.nomoreparties.co${movieImage}`}
          />
        </a>
        <button
        className={cardSaveButtonClassName}
        onClick={handleSaveClick}
        >Сохранить</button>
        <div className={ cardStatusClassName }
        onClick={handleDeleteClick}
        ></div>
     </div>
      :
      <div className='movies-card__image-container'>
        <img className='movies-card__image'
        alt={`Постер фильма ${movieName}`}
        src = {movieImage}
        />
        <button
        type='button'
        className='movies-card__delete-button'
        onClick={handleDeleteClick}
        ></button>
      </div>
      }

      <div className='movies-card__info-container'>
        <h2 className='movies-card__name'>{movieName}</h2>
        <div className='movies-card__length'>
          {(length >= 60)?
            <p className='movies-card__length-text'>{`${Math.floor(length/60)}ч ${length - Math.floor(length/60)*60}м`}</p>
          :
            <p className='movies-card__length-text'>{`${length}м`}</p>
        }

        </div>
      </div>
    </li>
  )
}

export default MoviesCard;
