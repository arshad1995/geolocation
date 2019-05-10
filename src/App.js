import React, { Component } from "react";
import SeasonDisplay from "./SeasonDisplay";
class App extends Component {
  constructor(props) {
    super(props);

    //this the only time we do direct assignment
    //to this.state
    this.state = {
      lat: null,
      error: ""
    };
  }
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        //we called setstate
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        this.setState({ error: err.message });
      }
    );
  }
  render() {
    if (!this.state.error && this.state.lat) {
      return <div>Latitude:{this.state.lat}</div>;
    }

    if (this.state.error && !this.state.lat) {
      return <div>error:{this.state.error}</div>;
    }

    return <div>Loading!</div>;
  }
}

export default App;
