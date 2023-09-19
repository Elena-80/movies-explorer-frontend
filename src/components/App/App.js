import React, { useEffect, useState } from "react";
import { Route, Navigate, Routes, useNavigate, useLocation } from "react-router-dom";

import './App.css';

import Main from "../Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFoundPage from "../NotFoundPage/NotFoundPage";


const App = () => {
  
  return (
      <div className="App">

        <Routes>
          <Route exact path='/' element = {
            <Main /> }
          />

          <Route exact path='/signup' element = {
            <Register /> }
          />

          <Route exact path='/signin' element = {
            <Login /> }
          />

          <Route path='/movies' element = {
            <Movies /> }
          />

          <Route path='/saved-movies' element = {
            <SavedMovies /> }
          />

          <Route path='/profile' element = {
             <Profile />}
          />

          <Route path='*' element = { 
            <NotFoundPage /> }
          />
        </Routes>

      </div>

  );
}

export default App;
