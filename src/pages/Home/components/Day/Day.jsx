import React from 'react';
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';
import { arrayDays } from '../ArrayDays';
import { useSelector } from 'react-redux';
import s from './Day.module.scss';

export const Day = () => {
  let today = new Date();
  let now = today.toLocaleTimeString().slice(0, -3);
  const weather = useSelector((store) => store);
  const dataWeather = arrayDays(weather);

  return (
    <div className={s.this__day}>
      <div className={s.top__block}>
        <div className={s.top__block_wrapper}>
          <div className={s.this__temp}>{dataWeather[0].temp_day}</div>
          <div className={s.this__day_name}>Сегодня</div>
        </div>
        <GlobalSvgSelector id={dataWeather[0].icon_id} />
      </div>
      <div className={s.bottom__block}>
        <div className={s.this__time}>
          Время: <span>{now}</span>
        </div>
        <div className={s.this__city}>
          Город: <span>{weather?.city?.name}</span>
        </div>
      </div>
    </div>
  );
};
