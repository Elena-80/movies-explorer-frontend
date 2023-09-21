import './AboutProject.css';

const AboutProject = () => {
  return (
    <section className='about'>
      <a name = "info"></a>
      <h2 className='about__title'>О проекте</h2>
      <div className='about__description-blocks'>
        <div className='about__description-block'>
          <h3>Дипломный проект включал 5 этапов</h3>
          <p>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className='about__description-block'>
          <h3>На выполнение диплома ушло 5 недель</h3>
          <p>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div>
        <div className='about__time-bar'>
          <p className='about__backend'>1 неделя</p>
          <p className='about__frontend'>4 недели</p>
        </div>
        <div className='about__time-text'>
          <p className='about__backend-text'>Back-end</p>
          <p className='about__frontend-text'>Front-end</p>
        </div>
      </div>
    </section>
  )
};

export default AboutProject;
