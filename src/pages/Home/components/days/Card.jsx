import React from 'react';
import s from './days.module.scss';
import { Popup } from '../../../../components/popup/Popup';
export const Card = ({ item, forecastDays }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <div className={s.card} onClick={() => setOpen(true)}>
        <div className={s.day}>{forecastDays}</div>
        <div className={s.day_info}>{item.main.temp_max}°C</div>
        <div className={s.img}>
          <img alt="weather" className={s.weather_icon} src={`icons/${item.weather[0].icon}.png`} />
        </div>
        <div className={s.temp_day}>{Math.round(item.main.temp)}°C</div>
        <div className={s.temp_night}>{item.main.temp_min}°C</div>
        <div className={s.info}>{item.weather[0].description}</div>
      </div>
      {open && (
        <Popup item={item} forecastDays={forecastDays} hidePopup={(open) => setOpen(open)} />
      )}
    </>
  );
};
