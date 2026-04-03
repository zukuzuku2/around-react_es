class Api {
  constructor(option = {}) {
    this._option = option;
    this._header = new Headers();
    this._header.append("Authorization", this._option.token);
    this._header.append("Content-Type", "application/json");
  }

  fetchData(url, requestOptions) {
    const allowedPath = /^[a-zA-Z0-9/_-]+$/;
    if (!allowedPath.test(url)) {
      return Promise.reject(new Error('Invalid request path'));
    }
    const base = new URL(this._option.url);
    const fullUrl = new URL(url.replace(/^\/+/, ''), base.href.replace(/\/?$/, '/'));
    if (fullUrl.origin !== base.origin) {
      return Promise.reject(new Error('Invalid URL origin'));
    }
    return fetch(fullUrl.toString(), requestOptions).then((response) => {
      return response.json();
    });
  }

  getCards() {
    const requestOptions = {
      method: "GET",
      headers: this._header,
    };

    return this.fetchData("cards", requestOptions);
  }

  deleteCards(id) {
    const requestOptions = {
      method: "DELETE",
      headers: this._header,
    };
    return this.fetchData(`/cards/${id}`, requestOptions);
  }

  addCard(options) {
    const requestOptions = {
      method: "POST",
      headers: this._header,
      body: JSON.stringify({
        name: options.name,
        link: options.link,
        owner: options.owner,
      }),
    };
    return this.fetchData("cards", requestOptions);
  }

  like() {
    const requestOptions = {
      method: "GET",
      headers: this._header,
    };
    return this.fetchData("cards", requestOptions);
  }

  updateLike(cardId) {
    const requestOptions = {
      method: "PUT",
      headers: this._header,
    };
    return this.fetchData(`cards/likes/${cardId}`, requestOptions);
  }

  removeLike(cardId) {
    const requestOptions = {
      method: "DELETE",
      headers: this._header,
    };
    return this.fetchData(`cards/likes/${cardId}`, requestOptions);
  }

  getUserInfo() {
    const requestOptions = {
      method: "GET",
      headers: this._header,
    };
    return this.fetchData(`users/me`, requestOptions);
  }

  updateUserInfo(options) {
    const requestOptions = {
      method: "PATCH",
      headers: this._header,
      body: JSON.stringify({
        name: options.name,
        about: options.about,
      }),
    };
    return this.fetchData(`users/me`, requestOptions);
  }

  updateProfilePhoto(options) {
    const requestOptions = {
      method: "PATCH",
      headers: this._header,
      body: JSON.stringify({
        avatar: options.avatar,
      }),
    };
    return this.fetchData(`users/me/avatar`, requestOptions);
  }

  changeLikeCardStatus(cardId, status) {
    return status ? this.updateLike(cardId) : this.removeLike(cardId);
  }
}

const api = new Api({
  token: "590c9c0f-0cfb-43a1-be02-96b36cadf695",
  url: "https://around.nomoreparties.co/v1/web_es_cohort_04",
});

export default api;
