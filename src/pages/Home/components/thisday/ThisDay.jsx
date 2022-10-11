import React from 'react';
import moment from 'moment';
import 'moment/locale/ru';
import s from './ThisDay.module.scss';

const ThisDay = ({ currentWeather }) => {
  return (
    <header className={s.this_day}>
      <div className={s.top_block}>
        <div className={s.wrapper}>
          <div className={s.this_temp}>
            {Math.round(currentWeather.main.temp)}
            °C
          </div>
          <div className={s.this_day_name}>Сегодня</div>
        </div>
        <img
          alt="weather"
          className={s.weather_icon}
          src={`icons/${currentWeather.weather[0].icon}.png`}
        />
      </div>
      <div className={s.bottom_block}>
        <div className={s.this_time}>
          <span> {moment().format('LLLL')}</span>
        </div>
        <div className={s.this_city}>
          город: <span>{currentWeather.name}</span>
        </div>
      </div>
    </header>
  );
};
export default ThisDay
