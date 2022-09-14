import React from 'react';
import { IndicatorSvgSelector } from '../../../../assets/icons/indicators/IndicatorSvgSelector';
import {} from './DayInfo';
import s from './DayInfo.module.scss';

export const DayItem = ({ item: { icon_id, name, value } }) => (
  <div className={s.item}>
    <div className={s.indicator}>
      <IndicatorSvgSelector id={icon_id} />
    </div>
    <div className={s.indicator_name}>{name}</div>
    <div className={s.indicator_value}>{value}</div>
  </div>
);
