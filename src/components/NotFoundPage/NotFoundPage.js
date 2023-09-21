import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFoundPage.css';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <section className='page__container'>
      <div className='page__info-block'>
        <h1 className='page__status'>404</h1>
        <p className='page__notfound'>Страница не найдена</p>
        <button onClick={() => navigate(-1)} className='page__go-back-btn'>Назад</button>
      </div>
    </section>
  )
};

export default NotFoundPage;