import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './style.module.scss';

export const Link = () => (
  <div className={s.button}>
    <NavLink to="/info" className={s.link}>
      Влияние погоды на здоровье человека
    </NavLink>
  </div>
);
