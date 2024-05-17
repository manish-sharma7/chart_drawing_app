import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.svg";
import "./App.css";
import Template from "./Components/template";

class App extends Component {
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "left" }}>
        <Template />
      </div>
    );
  }
}

export default App;
