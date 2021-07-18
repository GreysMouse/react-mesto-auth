class AuthApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
  }

  _checkResponse(res) {
    if(res.ok) return res.json();
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  register({email, password}) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        password: password,
        email: email
      })
    }).then(this._checkResponse);
  }

  authorize({password, email}) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        password: password,
        email: email
      })
    }).then(this._checkResponse);
  }

  logout() {
    return fetch(`${this._baseUrl}/logout`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(this._checkResponse);
  }
  
  getContent() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(this._checkResponse);
  }
}

const authApi = new AuthApi({
  baseUrl: 'https://api.mesto.greysmouse.nomoredomains.club',
});

export default authApi;