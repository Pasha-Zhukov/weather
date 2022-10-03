import React from 'react';
import s from './Loader.module.scss';

export const Loader = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.lds_ellipsis}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
