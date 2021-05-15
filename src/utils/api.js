class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._cohort = options.cohort;
    this._token = options.token;
  }

  _checkResponse(res) {
    if(res.ok) return res.json();
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/${this._cohort}/users/me`, {
      method: 'GET',
      headers: {
        authorization: this._token,
        'content-type': 'application/json'
      }
    }).then(this._checkResponse);
  }

  updateProfile(name, description) {
    return fetch(`${this._baseUrl}/${this._cohort}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        about: description
      })
    }).then(this._checkResponse);
  }

  updateAvatar(avatar) {
    return fetch(`${this._baseUrl}/${this._cohort}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        avatar: avatar
      })
    }).then(this._checkResponse);
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/${this._cohort}/cards`, {
      method: 'GET',
      headers: {
        authorization: this._token,
        'content-type': 'application/json'
      }
    }).then(this._checkResponse);
  }

  addCard(name, link) {
    return fetch(`${this._baseUrl}/${this._cohort}/cards`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        link: link
      })
    }).then(this._checkResponse);
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/${this._cohort}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
        'content-type': 'application/json'
      }
    }).then(this._checkResponse);
  }

  changeLikeCardStatus(cardId, method) {
    return fetch(`${this._baseUrl}/${this._cohort}/cards/likes/${cardId}`, {
      method: method,
      headers: {
        authorization: this._token,
        'content-type': 'application/json'
      }
    }).then(this._checkResponse);
  }
}

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1',
  cohort: 'cohort-21',
  token: 'e0650d2e-cc1d-4b7b-999a-f7cf471dfca5'
});

export default api;