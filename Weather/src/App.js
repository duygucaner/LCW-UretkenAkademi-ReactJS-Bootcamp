import React, { Component } from "react";
import Celcius from "./Celcius";
import "./app.css";
import Fahrenheit from "./Fahrenheit";
import Kelvin from "./Kelvin";
import { Button, Row, Col, Container } from "reactstrap";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Temp: 0,
    };
  }
  increaseTemp = () => {
    this.setState({ Temp: this.state.Temp + 1 }); 
  };
  decreaseTemp = () => {
    this.setState({ Temp: this.state.Temp - 1 }); 
  };

  render() {
    return (
      <div className="app">
        <Container>
          <Row>
            <h2>Weather</h2>
          </Row>
          <br />
          <Row>
            <h3>Current Temperature 🌡️: {this.state.Temp} °</h3>
          </Row>
          <br />
          <Row>
            <Col xs="auto">
              <Button
                onClick={() => this.decreaseTemp()}>
                Decrease Tepmerature 🔥
                  </Button>
                </Col>
                <Col>
              <Button
                onClick={() => this.increaseTemp()}>
                Increase Temperature ❄️
              </Button>
            </Col>
          </Row> 
          <br />
          <Row>
            <h4>Temperature Measurement in 3 Different Units:</h4>
          </Row>
          <br />
          <Row>
            <Col xs="4">
              <Celcius temp={this.state.Temp} />
            </Col>
            <Col xs="4">
              <Fahrenheit temp={(this.state.Temp * 1.8 + 32).toFixed(1)} />
            </Col>
            <Col xs="4">
              <Kelvin temp={(this.state.Temp + 273.15)} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}