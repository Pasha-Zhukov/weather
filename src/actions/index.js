import axios from 'axios';

export const fetchWeather = (city) => (dispatch) => {
  dispatch(requestWeather());
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=2fce26b3009e0a66de8c0a0223800869&lang=ru&cnt=7`;
  return axios
    .get(url)
    .then((response) => dispatch(receiveWeather(response.data)))
    .catch(() => dispatch(requestWeatherError()));
};

export const requestWeather = () => ({
  type: 'REQUEST_WEATHER',
});

export const receiveWeather = (json) => ({
  type: 'RECEIVE_WEATHER',
  payload: json,
});
// Экшен для обработки не правильно введенного города
export const requestWeatherError = () => ({
  type: 'ERROR_WEATHER',
  error: alert('Город не найден! \nПроверьте правильно ли Вы ввели название города'),
});
