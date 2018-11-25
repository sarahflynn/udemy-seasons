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
    return (
      <div>
        <h3>Latitude: {this.state.lat}</h3>
        <h3>Error: {this.state.errorMessage}</h3>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
