import React from 'react';
import s from './DayInfo.module.scss';
import cloud from '../../../../assets/images/cloud.png';
import { useSelector } from 'react-redux';
import { DayItem } from './DayItem';

export const DayInfo = () => {
  const weather = useSelector((store) => store);
  const temp = Math.round(weather?.list?.[0]?.main?.temp);
  const tempFeels = Math.round(weather?.list?.[0]?.main?.feels_like);
  const humidity = weather?.list?.[0]?.main?.humidity;
  const description = weather?.list?.[0]?.weather?.[0]?.description;
  const wind = weather?.list?.[0]?.wind?.speed;

  const items = [
    {
      icon_id: 'temp',
      name: 'Температура',
      value: `${temp || ''}° - ощущается как ${tempFeels || ''}°`,
    },
    {
      icon_id: 'pressure',
      name: 'Влажность',
      value: `${humidity || ''} %`,
    },
    {
      icon_id: 'precipitation',
      name: 'Осадки',
      value: `${description || ''}`,
    },
    {
      icon_id: 'wind',
      name: 'Ветер',
      value: `${wind || ''} м/с`,
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
