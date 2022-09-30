const arrDays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const date = new Date();

// Функция по добавлению дня к дате, используется в прогнозе на неделю
Date.prototype.addDays = function (days) {
  const date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

// Получаем дни недели которые динамически меняются в зависимости от текущего дня недели
const day1 = arrDays[date.addDays(1).getDay()];
const day2 = arrDays[date.addDays(2).getDay()];
const day3 = arrDays[date.addDays(3).getDay()];
const day4 = arrDays[date.addDays(4).getDay()];
const day5 = arrDays[date.addDays(5).getDay()];
const day6 = arrDays[date.addDays(6).getDay()];

export const arrayDays = (weather) => {
  return [
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
};
