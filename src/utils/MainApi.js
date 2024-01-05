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
    .then((res) => this._checkResponse(res))

  };

  login({email, password}) {
    return fetch(`${this.baseUrl}/signin`, {
      method: 'POST',
      credentials: 'include',
      withCredentials: true,
      headers: this.headers,
      body: JSON.stringify({email, password})
    })
    .then((res) => this._checkResponse(res))
    .then((data) => {
      console.log(data)
      if (data){
        localStorage.setItem('jwt', data.token);
        return data;
      } else {
        console.log('Логин: Ответ не пришел')
        return;
      }
     })
  };

  tokenCheck(token) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'GET',
      credentials: 'include',
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
      credentials: 'include',
      headers: this.headers,
    })
  }

  updateProfile() {

  }

  getUserInfo() {

  }

}

const mainApi = new MainApi({
  baseUrl: 'http://127.0.0.1:3000',
  headers: {
    "Content-Type": "application/json",
  }
});

export default mainApi;
