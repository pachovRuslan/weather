import React from 'react'
import s from './thisdayinfo.module.scss';
import { ThisDayItem } from './ThisDayItem';
import cloud from '../../../../assets/images/cloud.png';
const ThisDayInfo = ({currentWeather}) => {
  const items = [
    { icon_id: 'temp', name: 'Температура', value: `${currentWeather.main.temp}° - ощущается как ${currentWeather.main.feels_like}°` },
    { icon_id: 'pressure', name: 'Давление', value: `${currentWeather.main.pressure} мм ртутного столба - нормальное` },
    { icon_id: 'precipitation', name: 'Осадки', value: `${currentWeather.weather[0].description}` },
    { icon_id: 'wind', name: 'Ветер', value: `${currentWeather.wind.speed} м/с` },
  ];
  return (
      <header className={s.this_day_info}>
      <div className={s.this_day_info_items}>
        {items.map((item) => (
          <ThisDayItem key={item.icon_id} item={item} />
        ))}
      </div>
      <img className={s.cloud_img} src={cloud} alt="cloud" />
    </header>
  )
}

export default ThisDayInfo








