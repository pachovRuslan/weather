import React from 'react';
import { Card } from './Card';
import s from './days.module.scss';

const WEEK_DAYS = [
  'Понедельник',
  'Вторник',
  'Среда',
  'Чертверг',
  'Пятница',
  'Суббота',
  'Воскресенье',
];

const Days = ({ forecastWeather }) => {

  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek),
  );
  return (
        
      <div className={s.days} >
        {forecastWeather.list.splice(0, 7).map((item, idx) => (
          <Card item={item} key={idx} forecastDays={forecastDays[idx]} />
        ))}
      </div>
  
  );
};
export default Days;
