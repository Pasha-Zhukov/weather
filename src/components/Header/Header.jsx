import React, { useState, useEffect } from 'react';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import { Theme } from '../../context/ThemeContext';
import { Link } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import { fetchWeather } from '../../actions';
import { useDispatch } from 'react-redux';
import s from './Header.module.scss';

export const Header = () => {
  const [city, setCity] = useState('');
  const theme = useTheme();
  const dispatch = useDispatch();
  // Получаем введенный город и деспатчим, после отправки обнуляем input
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(fetchWeather(city));
    setCity('');
  }
  function changeTheme() {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  }
  // С помощью useEffect отпровляем первый(дефолтный) запрос для подгрузки данных
  useEffect(() => {
    dispatch(fetchWeather('Москва'));
  }, []);

  return (
    <header className={s.header}>
      <Link className={s.link} to="/">
        <div className={s.wrapper}>
          <div className={s.logo}>
            <GlobalSvgSelector id="header-logo" />
          </div>
          <div className={s.title}>Погода</div>
        </div>
      </Link>
      <div className={s.wrapper}>
        <div className={s.change_theme} onClick={changeTheme}>
          <GlobalSvgSelector id="change-theme" />
        </div>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setCity(e.target.value)}
            value={city}
            className={s.input}
            type="text"
            placeholder="Введите город"
            name="loc"
          />
          <button className={s.btn}>Поиск</button>
        </form>
      </div>
    </header>
  );
};
