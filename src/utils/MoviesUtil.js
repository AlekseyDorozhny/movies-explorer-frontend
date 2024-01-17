export function findMovies(data, name, shorts, savedMoviesData) {

  const likedMoviesData = data.filter((item) => {
    const savedMovie = savedMoviesData.find(movie => movie.movieId === item.id)
    if (savedMovie) {
      item.saved = true;
      item.savedMovieId = savedMovie._id
    } else {
      item.saved = false;
    }
    return item
  })

  const filteredMoviesByLenght = likedMoviesData.filter((item) => {
    if (shorts === false) {
        return item
    } else {
      if(item.duration < 40) {
        return item
      }
    }
  })

  const findedMovies = filteredMoviesByLenght.filter((item) => {
    const itemNameRu =  String(item.nameRU).toLowerCase().trim();
    const itemNameEn =  String(item.nameEN).toLowerCase().trim();
    const searchingName = String(name).toLowerCase();


    if (itemNameRu.indexOf(`${searchingName}`) !== -1 || itemNameEn.indexOf(`${searchingName}`) !== -1) {
      return item
    }
  });
  return findedMovies
}

export function findSavedMovies(data, name) {

  const findedMovies = data.filter((item) => {
    const itemNameRu =  String(item.nameRU).toLowerCase().trim();
    const itemNameEn =  String(item.nameEN).toLowerCase().trim();
    const searchingName = String(name).toLowerCase();


    if (itemNameRu.indexOf(`${searchingName}`) !== -1 || itemNameEn.indexOf(`${searchingName}`) !== -1) {
      return item
    }
  });
  return findedMovies
}

export function likeMovieInStorage(dataFromStorage, likedMovieId) {

  const newLikedMoviesData = dataFromStorage.movies.filter((item) => {
    if (item.id === likedMovieId) {
      item.saved = true;
    }
    return item
  })

  const newDataFromStorage = {movies: newLikedMoviesData, name: dataFromStorage.name, shorts: dataFromStorage.shorts}
  return newDataFromStorage
}

export function deleteMovieInStorage(dataFromStorage, deletedMovieId) {

  const newLikedMoviesData = dataFromStorage.movies.filter((item) => {
    if (item.id === deletedMovieId) {
      item.saved = false;
    }
    return item
  })

  const newDataFromStorage = {movies: newLikedMoviesData, name: dataFromStorage.name, shorts: dataFromStorage.shorts}
  return newDataFromStorage
}
