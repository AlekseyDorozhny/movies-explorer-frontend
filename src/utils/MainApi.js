class MainApi {
  constructor({baseUrl, headers}) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  }

  registration({name, email, password}) {
    return fetch(`${this.baseUrl}/signup`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({name, email, password}),
    })
    .then((res) => this._checkResponse(res))

  };

  login({email, password}) {
    return fetch(`${this.baseUrl}/signin`, {
      method: 'POST',
      withCredentials: true,
      headers: this.headers,
      body: JSON.stringify({email, password})
    })
    .then((res) => this._checkResponse(res))
    .then((data) => {
      if (data){
        localStorage.setItem('jwt', data.token);
        return data;
      }
     })
  };

  tokenCheck(token) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    })
    .then((res) => this._checkResponse(res))
  }

  logout() {
    return fetch(`${this.baseUrl}/signout`, {
      method: 'POST',
      headers: this.headers,
    })
  }

  updateProfile(name, email) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, email}),
    })
    .then((res) => this._checkResponse(res))
  }

  saveMovie(data) {
    return fetch(`${this.baseUrl}/movies`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: `https://api.nomoreparties.co${data.image.url}`,
        trailerLink: data.trailerLink,
        thumbnail: `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`,
        movieId: data.id,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
      }),
    })
    .then((res) => this._checkResponse(res))
  }

  getSavedMovies() {
    return fetch(`${this.baseUrl}/movies`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    })
    .then((res) => this._checkResponse(res))
  }

  deleteMovie(id) {
    return fetch(`${this.baseUrl}/movies/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    })
    .then((res) => this._checkResponse(res))
  }
}

const mainApi = new MainApi({
  baseUrl: 'http://127.0.0.1:3000',
  headers: {
    "Content-Type": "application/json",
  }
});

export default mainApi;
