function findMovies(data, name, shorts) {
  const filteredMovies = data.filter((item) => {
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

  const findedMovies = filteredMovies.filter((item) => {
    const itemNameRu =  String(item.nameRU).toLowerCase().trim();
    const itemNameEn =  String(item.nameEN).toLowerCase().trim();
    const searchingName = String(name).toLowerCase();


    if (itemNameRu.indexOf(`${searchingName}`) !== -1 || itemNameEn.indexOf(`${searchingName}`) !== -1) {
      return item
    }
  });
  console.log(findedMovies)
  return findedMovies
}

export default findMovies

