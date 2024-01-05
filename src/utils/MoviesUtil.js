import React from "react";
import moviesApi from "./MoviesApi";

function findMovies(data, name, shorts) {
  console.log(name)
  console.log(data)
  console.log(shorts)
  const filteredMovies = data.filter((item) => {
    if (shorts === false) {
      if(item.duration >= 40) {
        console.log('ищу длинные фильмы')
        return item
      }
    } else {
      console.log('ищу короткометражки1')
      if(item.duration < 40) {
        console.log('ищу короткометражки')
        return item
      }
    }
  })
  console.log(filteredMovies)
  const findedMovies = filteredMovies.filter((item) => {
    const itemNameRu =  String(item.nameRU).toLowerCase().trim();
    const itemNameEn =  String(item.nameEN).toLowerCase().trim();
    const searchingName = String(name).toLowerCase();


    if (itemNameRu.indexOf(`${searchingName}`) !== -1 || itemNameEn.indexOf(`${searchingName}`) !== -1) {
      console.log(item)
      return item
    }
  });

  return findedMovies
}

export default findMovies

