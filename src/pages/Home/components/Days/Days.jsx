import React, { useState } from 'react';
import { Card } from './Card';
import { useSelector } from 'react-redux';
import s from './Days.module.scss';
import { Popup } from '../../../../components/Popup/Popup';

// Функция по добавлению дня к дате, используется в прогнозе на неделю
Date.prototype.addDays = function (days) {
  const date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};
const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const date = new Date();

// Получаем дни недели которые динамически меняются в зависимости от текущего дня недели
const day1 = days[date.addDays(1).getDay()];
const day2 = days[date.addDays(2).getDay()];
const day3 = days[date.addDays(3).getDay()];
const day4 = days[date.addDays(4).getDay()];
const day5 = days[date.addDays(5).getDay()];
const day6 = days[date.addDays(6).getDay()];

export const Days = () => {
  const weather = useSelector((store) => store);
  const [isModalActive, setIsModalActive] = useState(false);
  const [activeDay, setActiveDay] = useState({});
  // Получаем день и данные этого дня для экспорта данных в попап
  const onDayClick = (day) => {
    setIsModalActive(true);
    setActiveDay(day);
  };

  const days = [
    {
      day: 'сегодня',
      day_info: date.addDays(0).toISOString().slice(0, 10),
      icon_id: weather?.list?.[0]?.weather?.[0]?.icon,
      temp_day: Math.round(weather?.list?.[0]?.main?.temp) + '°',
      temp_Feels: Math.round(weather?.list?.[0]?.main?.temp_min) + '°',
      info: weather?.list?.[0]?.weather?.[0]?.description,
      humidity: weather?.list?.[0]?.main?.humidity,
      wind: weather?.list?.[0]?.wind?.speed,
    },
    {
      day: day1,
      day_info: date.addDays(1).toISOString().slice(0, 10),
      icon_id: weather?.list?.[1]?.weather?.[0]?.icon,
      temp_day: Math.round(weather?.list?.[1]?.main?.temp) + '°',
      temp_Feels: Math.round(weather?.list?.[1]?.main?.temp_min) + '°',
      info: weather?.list?.[1]?.weather?.[0]?.description,
      humidity: weather?.list?.[1]?.main?.humidity,
      wind: weather?.list?.[1]?.wind?.speed,
    },
    {
      day: day2,
      day_info: date.addDays(2).toISOString().slice(0, 10),
      icon_id: weather?.list?.[2]?.weather?.[0]?.icon,
      temp_day: Math.round(weather?.list?.[2]?.main?.temp) + '°',
      temp_Feels: Math.round(weather?.list?.[2]?.main?.temp_min) + '°',
      info: weather?.list?.[2]?.weather?.[0]?.description,
      humidity: weather?.list?.[2]?.main?.humidity,
      wind: weather?.list?.[2]?.wind?.speed,
    },
    {
      day: day3,
      day_info: date.addDays(3).toISOString().slice(0, 10),
      icon_id: weather?.list?.[3]?.weather?.[0]?.icon,
      temp_day: Math.round(weather?.list?.[3]?.main?.temp) + '°',
      temp_Feels: Math.round(weather?.list?.[3]?.main?.temp_min) + '°',
      info: weather?.list?.[3]?.weather?.[0]?.description,
      humidity: weather?.list?.[3]?.main?.humidity,
      wind: weather?.list?.[3]?.wind?.speed,
    },
    {
      day: day4,
      day_info: date.addDays(4).toISOString().slice(0, 10),
      icon_id: weather?.list?.[4]?.weather?.[0]?.icon,
      temp_day: Math.round(weather?.list?.[4]?.main?.temp) + '°',
      temp_Feels: Math.round(weather?.list?.[4]?.main?.temp_min) + '°',
      info: weather?.list?.[4]?.weather?.[0]?.description,
      humidity: weather?.list?.[4]?.main?.humidity,
      wind: weather?.list?.[4]?.wind?.speed,
    },
    {
      day: day5,
      day_info: date.addDays(5).toISOString().slice(0, 10),
      icon_id: weather?.list?.[5]?.weather?.[0]?.icon,
      temp_day: Math.round(weather?.list?.[5]?.main?.temp) + '°',
      temp_Feels: Math.round(weather?.list?.[5]?.main?.temp_min) + '°',
      info: weather?.list?.[5]?.weather?.[0]?.description,
      humidity: weather?.list?.[5]?.main?.humidity,
      wind: weather?.list?.[5]?.wind?.speed,
    },
    {
      day: day6,
      day_info: date.addDays(6).toISOString().slice(0, 10),
      icon_id: weather?.list?.[6]?.weather?.[0]?.icon,
      temp_day: Math.round(weather?.list?.[6]?.main?.temp) + '°',
      temp_Feels: Math.round(weather?.list?.[6]?.main?.temp_min) + '°',
      info: weather?.list?.[6]?.weather?.[0]?.description,
      humidity: weather?.list?.[6]?.main?.humidity,
      wind: weather?.list?.[6]?.wind?.speed,
    },
  ];
  return (
    <>
      <div className={s.days}>
        {days.map((day, index) => (
          <Card day={day} onDayClick={onDayClick} index={index} key={day.day} />
        ))}
      </div>
      <Popup activeDay={activeDay} isModalActive={isModalActive} setIsModalActive={setIsModalActive} />
    </>
  );
};
