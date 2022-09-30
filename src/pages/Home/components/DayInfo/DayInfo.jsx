import React from 'react';
import s from './DayInfo.module.scss';
import cloud from '../../../../assets/images/cloud.png';
import { arrayDays } from '../ArrayDays';
import { useSelector } from 'react-redux';
import { DayItem } from './DayItem';

export const DayInfo = () => {
  const weather = useSelector((store) => store);
  const dataWeather = arrayDays(weather);

  const items = [
    {
      icon_id: 'temp',
      name: 'Температура',
      value: `${dataWeather[0]?.temp_day} - ощущается как ${dataWeather[0]?.temp_Feels}`,
    },
    {
      icon_id: 'pressure',
      name: 'Влажность',
      value: `${dataWeather[0]?.humidity} %`,
    },
    {
      icon_id: 'precipitation',
      name: 'Осадки',
      value: `${dataWeather[0]?.info}`,
    },
    {
      icon_id: 'wind',
      name: 'Ветер',
      value: `${dataWeather[0]?.wind} м/с`,
    },
  ];
  return (
    <div className={s.day_info}>
      <div>
        {items.map((item) => (
          <DayItem key={item.icon_id} item={item} />
        ))}
      </div>
      <img className={s.cloud_img} src={cloud} alt="облако" />
    </div>
  );
};
