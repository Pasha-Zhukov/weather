import React from 'react';
import { Loader } from '../../../../loader/Loader';
import { useSelector } from 'react-redux';
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';
import s from './Days.module.scss';

export const Card = (props) => {
  const weather = useSelector((store) => store);
  const { day, day_info, icon_id, temp_day, info } = props.day;

  return (
    <div className={s.card} onClick={() => props.onDayClick(props.day)}>
      {weather?.isLoading ? (
        <Loader />
      ) : (
        <>
          <div className={s.day}>{day}</div>
          <div className={s.day__info}>{day_info}</div>
          <div className={s.img}>
            <GlobalSvgSelector id={icon_id} />
          </div>
          <div className={s.temp__day}>{temp_day}</div>
          <div className={s.info}>{info}</div>
        </>
      )}
    </div>
  );
};
