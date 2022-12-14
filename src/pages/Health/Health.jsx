import s from './Health.module.scss';

export const Health = () => (
  <div className={s.health}>
    <h1>Метеозависимость – причины, виды, способы помощи. </h1>
    <p>
      По различным данным, болезненной чувствительностью к погоде – метеозависимостью – страдают до 75% населения
      планеты, при этом женщины – чаще мужчин. Поэтому, хотя в официально в Международной классификации болезней такого
      диагноза все еще нет, это явление регулярно привлекает к себе внимание и исследователей, и врачей, и самих
      «метеопатов». Главный врач, психиатр и психотерапевт нашей клиники Василий Шуров рассказывает, что же такое
      метеозависимость, каковы ее причины и разновидности – и как уменьшить влияние погоды на свою жизнь.
    </p>
    <h3>Что такое метеозависимость? Причины</h3>
    <p>
      Метеозависимость, или метеочувствительность – это нарушение адаптации человеческого организма к изменениям погоды.
    </p>
    <p>Так, на самочувствие человека могут влиять следующие погодные изменения:</p>
    <ul>
      <li>Температурный режим (потепление/похолодание)</li>
      <li>Атмосферное давление (сниженное/повышенное)</li>
      <li>Геомагнитная обстановка («солнечные бури»)</li>
      <li>Влажность воздуха и осадки (дождь, снег, град, туман)</li>
      <li>Уровень кислорода в воздухе (пониженный/повышенный)</li>
      <li>Скорость ветра (сильный ветер)</li>
      <li>Лунные фазы (полная луна)</li>
    </ul>
    <a
      target="_blank"
      rel="noreferrer noopener"
      href="https://zen.yandex.ru/media/id/5e5e195e23f6716bacbc570a/meteozavisimost--prichiny-vidy-sposoby-pomosci-rasskazyvaet-vrach-60b13520131e08119087d5a6"
    >
      подробнее
    </a>
  </div>
);
