import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    const { lat, errorMessage } = this.state;

    return (
      <div>
        { !lat && !errorMessage && <h3>Loading...</h3> }
        { lat && <SeasonDisplay lat={lat} /> }
        { errorMessage && <h3>Error: {errorMessage}</h3> }

      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
