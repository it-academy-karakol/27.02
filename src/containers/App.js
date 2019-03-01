import React, { Component } from "react";
import "./App.css";
import Slider from "../components/Slider/Slider";

class App extends Component {
  state = {
    backgroundColor: {
      red: 0,
      green: 0,
      blue: 0,
      alpha: 0
    }
  };

  changeRed = (position) => {
    const backgroundColor = {...this.state.backgroundColor};
    backgroundColor.red = position.toFixed(0);
    this.setState({ backgroundColor });
  };

  changeBlue = (position) => {
    const backgroundColor = {...this.state.backgroundColor};
    backgroundColor.blue = position.toFixed(0);
    this.setState({ backgroundColor });
  };

  changeGreen = (position) => {
    const backgroundColor = {...this.state.backgroundColor};
    backgroundColor.green = position.toFixed(0);
    this.setState({ backgroundColor });
  };

  changeAlpha = (position) => {
    const backgroundColor = {...this.state.backgroundColor};
    backgroundColor.alpha = position.toFixed(0);
    this.setState({ backgroundColor });
  };

  render() {
    let { red, green, blue, alpha } = this.state.backgroundColor;
    const color = `rgba(${red}, ${green}, ${blue}, ${alpha / 100})`;

    const style = {
      width: '100%',
      height: '100px',
      backgroundColor: color
    }

    return <div className="App">
      <div style={style}>{color}</div>

      <Slider
        position={this.state.backgroundColor.red}
        changePosition={this.changeRed}
        min="0"
        max="255"
        color="red"
      />
      <Slider
        position={this.state.backgroundColor.blue}
        changePosition={this.changeBlue}
        min="0"
        max="255"
        color="blue"
      />
      <Slider
        position={this.state.backgroundColor.green}
        changePosition={this.changeGreen}
        min="0"
        max="255"
        color="green"
      />
      <Slider
        position={this.state.backgroundColor.alpha}
        changePosition={this.changeAlpha}
        min="0"
        max="100"
        color={color}
      />
    </div>;
  }
}

export default App;
