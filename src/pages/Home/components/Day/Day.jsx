import React from 'react';
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';
import { useSelector } from 'react-redux';
import s from './Day.module.scss';

export const Day = () => {
    //Получение даты
    let today = new Date();
    let now = today.toLocaleTimeString().slice(0, -3);
    const weather = useSelector(store => store);
    // Получение температуры и иконки текущей погоды
    const iconId = weather?.list?.[0]?.weather?.[0]?.icon;
    const temp = Math.round(weather?.list?.[0]?.main?.temp);

    return (
        <div className={s.this__day}>
            <div className={s.top__block}>
                <div className={s.top__block_wrapper}>
                    <div className={s.this__temp}>{temp || ''}°</div>
                    <div className={s.this__day_name}>Сегодня</div>
                </div>
                <GlobalSvgSelector id={iconId} />
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