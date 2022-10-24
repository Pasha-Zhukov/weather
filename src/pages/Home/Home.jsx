import React from 'react';
import s from './Home.module.scss';
import { Days } from './components/Days/Days';
import { Day } from './components/Day/Day';
import { DayInfo } from './components/DayInfo/DayInfo';
// import { Link } from './components/Link';

export const Home = () => {
  return (
    <div className={s.home}>
      <div className={s.wrapper}>
        <Day />
        <DayInfo />
      </div>
      <Days />
      {/* <Link /> */}
    </div>
  );
};
