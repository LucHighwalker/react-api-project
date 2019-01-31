import React from 'react';

import Description from './weatherDesc';
import Temp from './temperature';

export default function WeatherData(props) {
  const { main, description, icon } = props.weatherData.weather[0];
  const {
    temp,
    pressure,
    humidity,
    temp_min,
    temp_max
  } = props.weatherData.main;

  return (
    <div>
      <div>Title: {main}</div>
      <Description description={description} />
      <div>Icon: {icon}</div>
      <div>Temp: {temp}</div>
      <div>Pressure: {pressure}</div>
      <div>Humidity: {humidity}</div>
      <Temp temp_min={temp_min} temp_max={temp_max} symbol="f" />
    </div>
  );
}
