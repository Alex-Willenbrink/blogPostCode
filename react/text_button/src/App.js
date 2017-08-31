import React, { Component } from "react";
import "./App.css";
import Button from "./Button";
import Text from "./Text";
const faker = require("faker");

class App extends Component {
  constructor() {
    super();

    this.state = {
      text: "Pizza!"
    };
  }

  handleEvent = e => {
    this.setState({ text: faker.lorem.word() });
  };

  render() {
    return (
      <div className="App">
        <Text text={this.state.text} />
        <Button handler={this.handleEvent} />
      </div>
    );
  }
}

export default App;
