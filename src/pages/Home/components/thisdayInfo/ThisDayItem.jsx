import React from 'react'
import { IndicatorSvgSelector } from '../../../../assets/images/icons/indicators/IndicatorSvgSelector';


import s from './thisdayinfo.module.scss';


export const ThisDayItem = ({item}) => {
  return (
    <div className={s.item}>
        <div className={s.indeicator}>
            <IndicatorSvgSelector id={item.icon_id}/>
        </div>
        <div className={s.indeicator_name}>{item.name}</div>
        <div className={s.indeicator_value}>{item.value}</div>
    </div>
  )
}