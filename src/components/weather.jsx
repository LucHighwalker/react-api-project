import React from 'react';
import PropTypes from 'prop-types';

import WeatherData from './weatherData/weatherData';

import './weather.css';

function Weather(props) {
  const { weatherData, loading } = props;

  if (weatherData === null && loading === false) {
    return null;
  }
  if (loading === false) {
    if (weatherData.weather !== undefined) {
      return <WeatherData weatherData={weatherData} />;
    }
    return <h2>Invalid zip</h2>;
  }
  return <div className="loading" />;
}

Weather.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  weatherData: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Weather;
