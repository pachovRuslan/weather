import React from 'react';
import Days from './components/days/Days';
import ThisDay from './components/thisday/ThisDay';
import ThisDayInfo from './components/thisdayInfo/ThisDayInfo';
import s from './home.module.scss';

function Home({ currentWeather, forecastWeather }) {
  return (
    <div className={s.home}>
      {currentWeather === null ? (
        <h2 className={s.description}> Введите название города</h2>
      ) : (
        <>
          <div className={s.wrapper}>
            <ThisDay currentWeather={currentWeather} />
            <ThisDayInfo currentWeather={currentWeather} />
          </div>
          <Days forecastWeather={forecastWeather} />
        </>
      )}
    </div>
  );
}

export default Home;
