function findMovies(data, name, shorts, savedMoviesData) {
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
      if(item.duration >= 40) {
        return item
      }
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

export default findMovies

