import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import UncontrolledFormSerialize from "./UncontrolledFormSerialize";
import UncontrolledFormRefs from "./UncontrolledFormRefs";
import ControlledForm from "./ControlledForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <UncontrolledFormSerialize />
        <UncontrolledFormRefs />
        <ControlledForm />
      </div>
    );
  }
}

export default App;
