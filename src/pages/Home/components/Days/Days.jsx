import React, { useState } from 'react';
import { Card } from './Card';
import { useSelector } from 'react-redux';
import { arrayDays } from '../ArrayDays';
import s from './Days.module.scss';
import { Popup } from '../../../../components/Popup/Popup';

export const Days = () => {
  const weather = useSelector((store) => store);
  const [isModalActive, setIsModalActive] = useState(false);
  const [activeDay, setActiveDay] = useState({});
  // Получаем день и данные этого дня для экспорта данных в попап
  const onDayClick = (day) => {
    setIsModalActive(true);
    setActiveDay(day);
  };

  return (
    <>
      <div className={s.days}>
        {arrayDays(weather).map((day) => (
          <Card day={day} onDayClick={onDayClick} key={day.day} />
        ))}
      </div>
      <Popup activeDay={activeDay} isModalActive={isModalActive} setIsModalActive={setIsModalActive} />
    </>
  );
};
