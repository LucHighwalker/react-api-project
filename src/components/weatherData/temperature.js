import React from 'react';

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

export default function Temp(props) {
  return (
    <div>
      Temp Min: {getTemperature(props.temp_min, props.symbol)}
      &nbsp;{getSymbol(props.symbol)}
      &nbsp;Max: {getTemperature(props.temp_max, props.symbol)}
      &nbsp;{getSymbol(props.symbol)}
    </div>
  );
}
