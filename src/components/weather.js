import React from 'react';

import WeatherData from './weatherData/weatherData';

import './weather.css'

export default function Weather(props) {
  if (props.weatherData === null && props.loading === false) {
    return null;
  } else if (props.loading === false) {
    if (props.weatherData.weather !== undefined) {
      return <WeatherData weatherData={props.weatherData} />;
    } else {
      return <h2>Invalid zip</h2>;
    }
  } else {
    return <div className="loading"></div>
  }
}
