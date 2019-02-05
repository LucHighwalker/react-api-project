import React from 'react';
import PropTypes from 'prop-types';

function getSymbol(symbol) {
  switch (symbol) {
    case 'c':
      return 'C°';

    case 'f':
      return 'F°';

    default:
      return 'K°';
  }
}

function getTemperature(kelvin, symbol) {
  let temp = null;
  switch (symbol) {
    case 'c':
      temp = kelvin - 273.15;
      break;

    case 'f':
      temp = (kelvin * 9) / 5 - 459.67;
      break;

    default:
      temp = kelvin;
      break;
  }

  return parseFloat(temp).toFixed(2);
}

function Temp(props) {
  const { tempMin, tempMax, symbol } = props;

  return (
    <div>
      Temp Min:
      {' '}
      {getTemperature(tempMin, symbol)}
      &nbsp;
      {getSymbol(symbol)}
      &nbsp;Max:
      {' '}
      {getTemperature(tempMax, symbol)}
      &nbsp;
      {getSymbol(symbol)}
    </div>
  );
}

Temp.propTypes = {
  tempMin: PropTypes.number.isRequired,
  tempMax: PropTypes.number.isRequired,
  symbol: PropTypes.string.isRequired,
};

export default Temp;
