import React from 'react';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import { DayItem } from '../../pages/Home/components/DayInfo/DayItem';
import { useSelector } from 'react-redux';
import s from './Popup.module.scss';

export const Popup = (props) => {
  const { day, icon_id, temp_day, temp_Feels, info, humidity, wind } = props.activeDay;

  let today = new Date();
  let now = today.toLocaleTimeString().slice(0, -3);
  const weather = useSelector((store) => store);

  const items = [
    {
      icon_id: 'temp',
      name: 'Температура',
      value: `${temp_day || ''} - ощущается как ${temp_Feels || ''}`,
    },
    {
      icon_id: 'pressure',
      name: 'Влажность',
      value: `${humidity || ''} %`,
    },
    {
      icon_id: 'precipitation',
      name: 'Осадки',
      value: `${info || ''}`,
    },
    {
      icon_id: 'wind',
      name: 'Ветер',
      value: `${wind || ''} м/с`,
    },
  ];

  return (
    <>
      <div onClick={() => props.setIsModalActive(false)} className={props.isModalActive ? s.blur : ''} />
      <div className={`${s.popup}  ${props.isModalActive ? s.active : ''}`}>
        <div className={s.day}>
          <div className={s.day__temp}>{temp_day || ''}</div>
          <div className={s.day__name}>{day}</div>
          <div className={s.img}>
            <GlobalSvgSelector id={icon_id} />
          </div>
          <div className={s.day__time}>
            Время: <span>{now}</span>
          </div>
          <div className={s.day__city}>
            Город: <span>{weather?.city?.name}</span>
          </div>
        </div>
        <div className={s.this__day_info_items}>
          {items.map((item) => (
            <DayItem key={item.icon_id} item={item} />
          ))}
        </div>
        <div className={s.close} onClick={() => props.setIsModalActive(false)}>
          <GlobalSvgSelector id="close" />
        </div>
      </div>
    </>
  );
};
