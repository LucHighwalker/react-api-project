import React from 'react';
import PropTypes from 'prop-types';

import Description from './weatherDesc';
import Temp from './temperature';

function WeatherData(props) {
  const { weatherData } = props;

  const { main, description, icon } = weatherData.weather[0];
  const {
    temp, pressure, humidity, tempMin, tempMax,
  } = weatherData.main;

  return (
    <div>
      <div>
        Title:&nbsp;
        {main}
      </div>
      <Description description={description} />
      <div>
        Icon:&nbsp;
        {icon}
      </div>
      <div>
        Temp:&nbsp;
        {temp}
      </div>
      <div>
        Pressure:&nbsp;
        {pressure}
      </div>
      <div>
        Humidity:&nbsp;
        {humidity}
      </div>
      <Temp tempMin={tempMin} tempMax={tempMax} symbol="f" />
    </div>
  );
}

WeatherData.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  weatherData: PropTypes.object.isRequired,
};

export default WeatherData;
