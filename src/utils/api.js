class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._cohort = options.cohort;
  }

  _checkResponse(res) {
    if(res.ok) return res.json();
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(this._checkResponse);
  }

  updateProfile(name, description) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        about: description
      })
    }).then(this._checkResponse);
  }

  updateAvatar(avatar) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        avatar: avatar
      })
    }).then(this._checkResponse);
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(this._checkResponse);
  }

  addCard(name, link) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        link: link
      })
    }).then(this._checkResponse);
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(this._checkResponse);
  }

  changeLikeCardStatus(cardId, method) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: method,
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(this._checkResponse);
  }
}

const api = new Api({
  baseUrl: 'https://api.mesto.greysmouse.nomoredomains.club',
});

export default api;