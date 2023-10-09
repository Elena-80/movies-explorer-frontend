class Auth {

    constructor(baseUrl) {
      this._baseUrl = baseUrl;
    }
  
    _getErrorFromServer(res) {
      return res.json()
        .then((res) => {
          return Promise.reject(`Ошибка: ${res.status}`);
        });    
      };
  
  register({ name, email, password }) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        password
      }),
    })
    .then(res => {
      if (res.ok) return res.json();
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  };
  
  authorize({ email, password }) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password }),
    })
    .then(res => {
      if (res.ok) return res.json();
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  };

  signout() {
    return fetch(`${this._baseUrl}/signout`, {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
    })
    .then(res => {
      if (res.ok) return res.json();
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  };
  
}

const auth = new Auth('https://api.elenamovies.nomoredomainsicu.ru');
// const auth = new Auth('http://localhost:3000');

export default auth;