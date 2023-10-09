const BASE_API_URL = 'https://api.elenamovies.nomoredomainsicu.ru';
const MOVIES_API_URL = 'https://api.nomoreparties.co';

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export const getContent = async (jwt) => {
  return fetch(`${BASE_API_URL}/users/me`, {
    method: 'GET',
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
      image: `${MOVIES_API_URL}${movie.image.url}`,
      trailerLink: movie.trailerLink,
      thumbnail: `${MOVIES_API_URL}${movie.image.formats.thumbnail.url}`,
      movieId: movie.id,
      nameRU: movie.nameRU || movie.nameEN,
      nameEN: movie.nameEN || movie.nameRU,
    }),
  }).then((res) => checkResponse(res));
};

export const deleteMovie = async (id, jwt) => {
  return fetch(`${BASE_API_URL}/movies/${id}`, {
    method: 'DELETE',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      'Authorization': `Bearer ${jwt}`,
    },
  }).then((res) => checkResponse(res));
};
