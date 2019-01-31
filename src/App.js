import React, { Component } from 'react';

import Weather from './components/weather';

import './App.css';

/**
 * This example illustrates a simple react project
 * that works with an external API.
 *
 * Take note of the comments they point common
 * problems you will need to solve with React.
 *
 * There are two ideas here
 * - Input/Controlled Component Pattern
 * - Conditionally Rendering components
 *
 * The project has an input field where a user will
 * input a zip code. It finds weather data for that
 * zip and displays it in a component.
 *
 * */

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '', // Used to hold value entered in the input field
      weatherData: null, // Used to hold data loaded from the weather API
      loading: false
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      loading: true
    });
    // ! Get your own API key !
    const apikey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
    // Get the zip from the input
    const zip = this.state.inputValue;
    // Form an API request URL with the apikey and zip
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${apikey}`;
    // Get data from the API with fetch
    fetch(url)
      .then(res => {
        // Handle the response stream as JSON
        return res.json();
      })
      .then(json => {
        // If the request was successful assign the data to component state
        this.setState({ weatherData: json, loading: false });
        // ! This needs better error checking here or at renderWeather()
        // It's possible to get a valid JSON response that is not weather
        // data, for example when a bad zip code entered.
      })
      .catch(err => {
        // If there is no data
        this.setState({ weatherData: null }); // Clear the weather data we don't have any to display
        // Print an error to the console.
        console.log('-- Error fetching --');
        console.log(err.message);
        // You may want to display an error to the screen here.
      });
  }

  render() {
    return (
      <div className="App">
        {/** This input uses the controlled component pattern */}
        <div className="zip">
          <form onSubmit={e => this.handleSubmit(e)}>
            <input
              value={this.state.inputValue}
              onChange={e => this.setState({ inputValue: e.target.value })}
              type="text"
              pattern="(\d{5}([\-]\d{4})?)"
              placeholder="enter zip"
            />

            <button type="submit">
              <span>Submit</span>
            </button>
          </form>

          {/** Conditionally render this component */}
          <Weather weatherData={this.state.weatherData} loading={this.state.loading}/>
        </div>
      </div>
    );
  }
}

export default App;
