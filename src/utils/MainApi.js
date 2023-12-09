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
      credentials: 'include',
      headers: this.headers,
      body: JSON.stringify({name, email, password}),
    })
    .then((res) => {this._checkResponse(res)})
  };

  login({email, password}) {
    return fetch(`${this.baseUrl}/signin`, {
      method: 'POST',
      credentials: 'include',
      headers: this.headers,
      body: JSON.stringify({email, password}),
    })
    .then((res) => {this._checkResponse(res)})
    .then((data) => {
      if (data){
        localStorage.setItem('jwt', 'jwt in cookies');
        return data;
      } else {
        return;
      }
     })
  };

  tokenCheck() {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: this.headers,
    })
    .then((res) => {this._checkResponse(res)})
  };

  logout({name, email, password}) {
    return fetch(`${this.baseUrl}/signout`, {
      method: 'POST',
      credentials: 'include',
      headers: this.headers,
      body: JSON.stringify({name, email, password}),
    })
    .then((res) => {this._checkResponse(res)})
  };

  updateProfile() {

  }

  getUserInfo() {

  }

}

const mainApi = new MainApi({
  baseUrl: 'http://127.0.0.1:3000',
  headers: {
    "Content-Type": "application/json"
  }
});

export default mainApi;

