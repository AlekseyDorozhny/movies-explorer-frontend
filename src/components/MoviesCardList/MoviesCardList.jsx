import React from 'react';
import './MoviesCardList.css';

import firstMovieImage from '../../images/1 movie.png'
import secondMovieImage from '../../images/2 movie.png'
import thirdMovieImage from '../../images/3 movie.png'

import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  return(
    <div className='movies-card-list'>
      <div className='movies-card-list__container'>
        <MoviesCard
        movieImage={firstMovieImage}
        movieName={'33 слова о дизайне'}
        length={'1ч 17м'}
        />
        <MoviesCard
        movieImage={firstMovieImage}
        movieName={'Киноальманах «100 лет дизайна»'}
        length={'1ч 17м'}
        />
        <MoviesCard
        movieImage={firstMovieImage}
        movieName={'В погоне за Бенкси В погоне за Бенкси В погоне за Бенкси В погоне за Бенкси В погоне за Бенкси'}
        length={'1ч 17м'}
        />
        <MoviesCard
        movieImage={firstMovieImage}
        movieName={'33 слова о дизайне'}
        length={'1ч 17м'}
        />
        <MoviesCard
        movieImage={firstMovieImage}
        movieName={'Киноальманах «100 лет дизайна»'}
        length={'1ч 17м'}
        />
        <MoviesCard
        movieImage={firstMovieImage}
        movieName={'В погоне за Бенкси В погоне за Бенкси В погоне за Бенкси В погоне за Бенкси В погоне за Бенкси'}
        length={'1ч 17м'}
        />
      </div>
    </div>
  )
}

export default MoviesCardList;
