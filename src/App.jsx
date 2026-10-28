
import { Component } from 'react';
import City from './City';
import { cities } from './cities';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      city: 'Toronto'
    };
  }

  changeCity = () => {
    this.setState({
      city: this.state.city === 'Toronto'
        ? 'Vancouver'
        : 'Toronto'
    });
  };

  render() {
    const cityName = this.state.city;
    const currentCity = cities[cityName];

    return (
      <div>
        <City
          name={currentCity.name}
          image={currentCity.image}
        />

        <button onClick={this.changeCity}>
          {cityName === 'Toronto' ? 'Vancouver' : 'Toronto'}
        </button>
      </div>
    );
  }
}

export default App;
