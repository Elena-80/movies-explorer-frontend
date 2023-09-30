const BASE_API_URL = 'https://api.elenamovies.nomoredomainsicu.ru';

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

// export const register = async ({ name, email, password }) => {
//   return fetch(`${BASE_API_URL}/signup`, {
//     method: 'POST',
//     headers: {
//       "Accept": "application/json",
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//       name,
//       email,
//       password
//     }),
//   }).then((res) => checkResponse(res));
// };

// export const authorize = async ({ email, password }) => {
//   return fetch(`${BASE_API_URL}/signin`, {
//     method: 'POST',
//     headers: {
//       "Accept": "application/json",
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({ email, password }),
//   }).then((res) => checkResponse(res));
// };

export const getContent = async (jwt) => {
  return fetch(`${BASE_API_URL}/users/me`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      'Authorization': `Bearer ${jwt}`,
    }
  }).then((res) => checkResponse(res));
};

export const updateUserInfo = async (data, jwt) => {
  return fetch(`${BASE_API_URL}/users/me`, {
    method: 'PATCH',
    credentials: 'include',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      'Authorization': `Bearer ${jwt}`,
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
    }),
  }).then((res) => checkResponse(res));
};

export const getSavedMovies = async (jwt) => {
  return fetch(`${BASE_API_URL}/movies`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      'Authorization': `Bearer ${jwt}`,
    }
  }).then((res) => checkResponse(res));
};

export const saveMovie = async (movie, jwt) => {
  return fetch(`${BASE_API_URL}/movies`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      'Authorization': `Bearer ${jwt}`,
    },
    body: JSON.stringify({
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: 'https://api.nomoreparties.co/' + movie.image.url,
      trailerLink: movie.trailerLink,
      thumbnail: 'https://api.nomoreparties.co/' + movie.image.formats.thumbnail.url,
      movieId: movie.id,
      nameRU: movie.nameRU || movie.nameEN,
      nameEN: movie.nameEN || movie.nameRU,
    }),
  }).then((res) => checkResponse(res));
};

export const deleteMovie = async (id, jwt) => {
  return fetch(`${BASE_API_URL}/movies/${id}`, {
    method: 'DELETE',
    credentials: 'include',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      'Authorization': `Bearer ${jwt}`,
    },
  }).then((res) => checkResponse(res));
};
