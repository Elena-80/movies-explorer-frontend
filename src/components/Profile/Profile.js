import React from 'react';
import './Profile.css';
import Header from '../Header/Header';
import useForm from '../../hooks/useForm';

const Profile = () => {
  const { enteredValues, handleChange, isFormValid, resetForm } = useForm();

  const handleSubmit = (event) => {
    event.preventDefault();

  };


  return (
    <section>
      <Header />
      <div className='profile__container'>
        <h1 className='profile__title'>Привет, Елена!</h1>
        <form className='profile__form form' onSubmit={handleSubmit}>
          <div className='profile__value'>
            <label className='profile__label'>Имя</label>
            <input
              type='text'
              name='name'
              minLength={2}
              value={enteredValues.name || ''}
              onChange={handleChange}
              className='profile__input'
              required
            />
          </div>
          <div className='profile__line'></div>
          <div className='profile__value'>
            <label className='profile__label'>
              E-mail
            </label>
            <input
              type='email'
              name='email'
              value={enteredValues.email || ''}
              onChange={handleChange}
              className='profile__input'
              pattern={'^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$'}
              required
            />
          </div>
          <div className='profile__bottom'>
            <button
              className='profile__edit'
              type='submit'
            >
              Редактировать
            </button>
            <button
              className='profile__logout'
              type='button'
            >
              Выйти из аккаунта
            </button>
          </div>
        </form>
      </div>
    </section>
  )
};

export default Profile;