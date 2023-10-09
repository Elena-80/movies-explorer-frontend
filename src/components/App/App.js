import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";

import './App.css';
import CurrentUserContext from "../../contexts/CurrentUserContext";

import Main from "../Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import auth from "../../utils/auth.js";

import {
  getContent,
  updateUserInfo,
  saveMovie,
  deleteMovie,
  getSavedMovies,
} from "../../utils/MainApi";

const App = () => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    handleTokenCheck();
  }, [isLoggedIn])

  const handleTokenCheck = () => {
    const path = location.pathname;
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      getContent(jwt)
        .then((data) => {
          setIsLoggedIn(true);
          setCurrentUser(data);
          navigate(path);
        })
        .catch((err) => console.log(err));

      getSavedMovies(jwt)
        .then((movies) => {
          setSavedMovies(movies)
        })
        .catch((err) => console.log(err));
      }
  };

  const handleRegistration =  ({ name, email, password }) => {
    setIsLoading(true);
    auth 
    .register({ name, email, password })
      .then(() => {
        handleAuthorization({ email, password });
      })
      .catch(error => {
          setPopupMessage(error);
          setIsPopupOpen(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  
  const handleAuthorization =  (data) => {
    setIsLoading(true);
    auth
    .authorize(data)
      .then((data) => {
        setIsLoggedIn(true);
        localStorage.setItem('jwt', data.token);
        navigate('/movies');
        Promise.all([getContent(data.token), getSavedMovies(data.token)])
          .then(([userInfo, userMovies]) => {
            setCurrentUser(userInfo);
            localStorage.setItem('savedMovies', JSON.stringify(userMovies));
            setSavedMovies(userMovies);
          })
          .catch(error => {
            console.log(error);
          })
          .finally(() => {
            setIsLoading(false);
          })
      })
      .catch(error => {
        console.log(error);
        setPopupMessage(error);
        setIsPopupOpen(true);
      })
      .finally(() => {
        setIsLoading(false);
      })
  };


  const handleSaveMovie = (movie) => {
    const jwt = localStorage.getItem('jwt');
    const handledMovie = savedMovies.find(item => {
      return item.movieId === movie.id
    });
    const isLiked = Boolean(handledMovie);
    const id = handledMovie ? handledMovie._id : null;
    if (isLiked) {
      deleteMovie(id, jwt)
        .then((card) => {
          const updatedSavedMovies = savedMovies.filter(item => card._id !== item._id);
          localStorage.setItem('savedMovies', JSON.stringify(updatedSavedMovies));
          setSavedMovies(updatedSavedMovies);
        })
        .catch(error => {
          setPopupMessage(error);
          setIsPopupOpen(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      saveMovie(movie, jwt)
        .then((newSavedMovie) => {
          // setSavedMovies((prev) => [...prev, newSavedMovie]);
          const updatedSavedMovies = [...savedMovies, newSavedMovie];
          localStorage.setItem('savedMovies', JSON.stringify(updatedSavedMovies));
          setSavedMovies(updatedSavedMovies);
        })
        .catch((error) => {
          setPopupMessage(error);
          setIsPopupOpen(true);
        })
    }
  }

  const handleDeleteMovie = (movie) => {
    setIsLoading(true);
    const jwt = localStorage.getItem('jwt');
    deleteMovie(movie._id, jwt)
      .then((card) => {
        const updatedSavedMovies = savedMovies.filter(item => card._id !== item._id);
        localStorage.setItem('savedMovies', JSON.stringify(updatedSavedMovies));
        setSavedMovies(updatedSavedMovies);
      })
      .catch(error => {
        setPopupMessage(error);
        setIsPopupOpen(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setPopupMessage('');
  };

  const handleUpdateUser = (newUserInfo) => {
    const jwt = localStorage.getItem('jwt');
    setIsLoading(true);
    updateUserInfo(newUserInfo, jwt)
      .then((data) => {
        setCurrentUser(data);
        setPopupMessage('Профиль успешно редактирован!');
        setIsPopupOpen(true);
      })
      .catch(error => {
        setPopupMessage('При обновлении профиля произошла ошибка.');
        setIsPopupOpen(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleSignOut = () => {
    localStorage.clear();
    setCurrentUser({});
    setPopupMessage('');
    setSavedMovies([]);
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route exact path='/' 
            element = { <Main loggedIn={isLoggedIn} /> }
          />

          <Route exact path='/signup' 
            element = {<Register onRegister={handleRegistration} onLoading={isLoading} />}

          />

          <Route exact path='/signin' 
            element = {<Login onLogin={handleAuthorization} onLoading={isLoading}/>}

          />

          <Route path='/movies' element = {
            <ProtectedRoute
              component={Movies}
              loggedIn={isLoggedIn}
              savedMovies={savedMovies}
              onLoading={setIsLoading}
              isLoading={isLoading}
              onSave={handleSaveMovie}
              onDelete={handleDeleteMovie}
              setPopupMessage={setPopupMessage}
              setIsPopupOpen={setIsPopupOpen}
            />}
          />

          <Route path='/saved-movies' element = {
            <ProtectedRoute
              component={SavedMovies}
              savedMovies={savedMovies}
              loggedIn={isLoggedIn}
              isLoading={isLoading}
              onDelete={handleDeleteMovie}
              setPopupMessage={setPopupMessage}
              setIsPopupOpen={setIsPopupOpen}
            />}
          />

          <Route path='/profile' element = {
            <ProtectedRoute
              component={Profile}
              loggedIn={isLoggedIn}
              onUpdateUser={handleUpdateUser}
              onSignOut={handleSignOut}
              onLoading={isLoading}
            />}
          />

          <Route path='*' element = { 
            <NotFoundPage /> }
          />
        </Routes>

        <InfoTooltip
          isOpen={isPopupOpen}
          onClose={handleClosePopup}
          message={popupMessage}
        />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
