import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./template.css";
import { Route, NavLink, BrowserRouter } from "react-router-dom";
import LineChart from "./LineChart";
import AreaChart from "./AreaChart";
import ColumnChart from "./ColumnChart";
import PieChart from "./PieChart";
global.jQuery = require("jquery");
require("bootstrap");
class Template extends Component {
  constructor() {
    super();
    this.state = {
      X: "Choose X data",
      Y: "Choose Y data",
      ChartName: "XYZ chart",
    };
    this.getXdata = this.getXdata.bind(this);
    this.getYdata = this.getYdata.bind(this);
    this.getChartdata = this.getChartdata.bind(this);
  }
  getXdata(Xvalue) {
    this.setState({ X: Xvalue });
  }
  getYdata(Yvalue) {
    this.setState({ Y: Yvalue });
  }
  getChartdata(Chartvalue) {
    this.setState({ ChartName: Chartvalue });
  }
  render() {
    return (
      <div>
        <XDropdown gettingXdata={this.getXdata} />
        <YDropdown gettingYdata={this.getYdata} />
        <ChartDropdown gettingChartdata={this.getChartdata} />
        <p>
          {(() => {
            switch (this.state.ChartName) {
              case "LineChart":
                return (
                  <div>
                    <LineChart
                      choosenX={this.state.X}
                      choosenY={this.state.Y}
                    />
                  </div>
                );
              case "PieChart":
                return (
                  <div>
                    <PieChart choosenX={this.state.X} choosenY={this.state.Y} />
                  </div>
                );
              case "ColumnChart":
                return (
                  <div>
                    <ColumnChart
                      choosenX={this.state.X}
                      choosenY={this.state.Y}
                    />
                  </div>
                );
              case "AreaChart":
                return (
                  <div>
                    <AreaChart
                      choosenX={this.state.X}
                      choosenY={this.state.Y}
                    />
                  </div>
                );
              default:
                return "";
            }
          })()}
        </p>
      </div>
    );
  }
}
class ChartDropdown extends Component {
  constructor() {
    super();
    this.state = {
      displayMenu: false,
      displayValue: "Choose a Chart",
    };
    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
    this.sendChartdata = this.sendChartdata.bind(this);
  }
  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener("click", this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener("click", this.hideDropdownMenu);
    });
  }
  sendChartdata(value) {
    this.props.gettingChartdata(value);
    this.setState({ displayValue: value });
  }
  render() {
    return (
      <div className="dropdown" style={{ background: "black", width: "200px" }}>
        <div className="button" onClick={this.showDropdownMenu}>
          {" "}
          {this.state.displayValue}{" "}
        </div>

        {this.state.displayMenu ? (
          <ul>
            <li>
              <a
                href="#LineChart"
                onClick={() => this.sendChartdata("LineChart")}
              >
                Line Chart
              </a>
            </li>
            <li>
              <a
                href="#PieChart"
                onClick={() => this.sendChartdata("PieChart")}
              >
                Pie Chart
              </a>
            </li>
            <li>
              <a
                href="#ColumnChart"
                onClick={() => this.sendChartdata("ColumnChart")}
              >
                Column Chart
              </a>
            </li>
            <li>
              <a
                href="#AreaChart"
                onClick={() => this.sendChartdata("AreaChart")}
              >
                Area Chart
              </a>
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}
class XDropdown extends Component {
  constructor() {
    super();
    this.state = {
      displayMenu: false,
      displayValue: "X data",
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
    this.sendXdata = this.sendXdata.bind(this);
  }

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener("click", this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener("click", this.hideDropdownMenu);
    });
  }
  sendXdata(value) {
    this.props.gettingXdata(value);
    this.setState({ displayValue: value });
  }
  render() {
    return (
      <div className="dropdown" style={{ background: "black", width: "200px" }}>
        <div className="button" onClick={this.showDropdownMenu}>
          {" "}
          {this.state.displayValue}{" "}
        </div>

        {this.state.displayMenu ? (
          <ul>
            <li>
              <a href="#friends_X" onClick={() => this.sendXdata("friends_X")}>
                friends_X
              </a>
            </li>
            <li>
              <a
                href="#avengers_X"
                onClick={() => this.sendXdata("avengers_X")}
              >
                avengers_X
              </a>
            </li>
            <li>
              <a href="#GoT_X" onClick={() => this.sendXdata("GoT_X")}>
                GoT_X
              </a>
            </li>
            <li>
              <a
                href="#moneyheist_X"
                onClick={() => this.sendXdata("moneyheist_X")}
              >
                moneyheist_X
              </a>
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}
class YDropdown extends Component {
  constructor() {
    super();
    this.state = {
      displayMenu: false,
      displayValue: "Y data",
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
    this.sendYdata = this.sendYdata.bind(this);
  }

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener("click", this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener("click", this.hideDropdownMenu);
    });
  }
  sendYdata(value) {
    this.props.gettingYdata(value);
    this.setState({ displayValue: value });
  }
  render() {
    return (
      <div className="dropdown" style={{ background: "black", width: "200px" }}>
        <div className="button" onClick={this.showDropdownMenu}>
          {" "}
          {this.state.displayValue}{" "}
        </div>

        {this.state.displayMenu ? (
          <ul>
            <li>
              <a href="#friends_Y" onClick={() => this.sendYdata("friends_Y")}>
                friends_Y
              </a>
            </li>
            <li>
              <a
                href="#avengers_Y"
                onClick={() => this.sendYdata("avengers_Y")}
              >
                avengers_Y
              </a>
            </li>
            <li>
              <a href="#GoT_Y" onClick={() => this.sendYdata("GoT_Y")}>
                GoT_Y
              </a>
            </li>
            <li>
              <a
                href="#moneyheist_Y"
                onClick={() => this.sendYdata("moneyheist_Y")}
              >
                moneyheist_Y
              </a>
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}
export default Template;
