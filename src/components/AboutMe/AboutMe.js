import './AboutMe.css';
import photo from '../../images/myphoto.jpg';

const AboutMe = () => {
  return (
    <section className='about-me'>
      <h2 className='about-me__title'>Студент</h2>
      <div className='about-me__content'>
        <div className='about-me__info'>
          <h3 className='about-me__name'>Елена</h3>
          <p className='about-me__job'>Фронтенд-разработчик, 36 лет</p>
          <p className='about-me__bio'>
            Я родилась и живу в Московской области, работаю преподавателем английского языка. 
            Всегда хотела научиться программировать и наконец решила попробовать свои силы вместе с Яндекс Практикум. 
            В свободное время я гуляю с детьми и выращиваю орхидеи.
          </p>
          <a className='about-me__link' href='https://github.com/Elena-80' target='_blank' rel='noreferrer'>Github</a>
        </div>
        <img
          className='about-me__photo'
          src={photo}
          alt='Мое фото'
        />
      </div>
    </section>
  )
};

export default AboutMe;