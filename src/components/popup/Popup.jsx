import React from 'react';
import { GlobalSvgSelector } from '../../assets/images/icons/global/GlobalSvgSelector';
import { ThisDayItem } from '../../pages/Home/components/thisdayInfo/ThisDayItem';
import s from './popup.module.scss';

export const Popup = ({ item, forecastDays, hidePopup }) => {
  const items = [
    {
      icon_id: 'temp',
      name: 'Температура',
      value: `${item.main.temp}° - ощущается как ${item.main.feels_like}°`,
    },
    {
      icon_id: 'pressure',
      name: 'Давление',
      value: `${item.main.pressure} мм ртутного столба - нормальное`,
    },
    { icon_id: 'precipitation', name: 'Осадки', value: `${item.weather[0].description}` },
    { icon_id: 'wind', name: 'Ветер', value: `${item.wind.speed} м/с` },
  ];

  return (
    <>
      <div className={s.blur}></div>
      <div className={s.popup}>
        <div className={s.day}>
          <div className={s.day_temp}>{Math.round(item.main.temp)}°</div>
          <div className={s.day_name}>{forecastDays}</div>
          <div className={s.day_time}>{item.dt_txt}</div>
          <div className={s.img}>
            <img
              alt="weather"
              className={s.weather_icon}
              src={`icons/${item.weather[0].icon}.png`}
            />
          </div>
        </div>
        <div className={s.this_day_info_items}>
          <div className={s.this__day_info_items}>
            {items.map((item) => (
              <ThisDayItem key={item.icon_id} item={item} />
            ))}
          </div>
        </div>

        <div className={s.close} onClick={() => hidePopup(false)}>
          <GlobalSvgSelector id="close" />
        </div>
      </div>
    </>
  );
};
