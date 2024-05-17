import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CanvasJSReact from "./assets/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class PieChart extends Component {
  constructor() {
    super();
    this.state = {
      DataX: [1, 2, 3, 4, 5], //Randomly initializing values of DataX
      DataY: [1, 2, 3, 4, 5], //Randomly initializing values of DataX
      TotalPoints: [
        //Randomly initializing values of TotalPoints
        { x: 1, y: 1 },
        { x: 2, y: 2 },
        { x: 3, y: 3 },
        { x: 4, y: 4 },
        { x: 5, y: 5 },
      ],
    };
  }
  componentDidMount() {
    let JsonData = [];
    var linkX = "/XYdata/" + this.props.choosenX;
    fetch(linkX)
      .then((res) => res.json())
      .then((XYdata) => {
        let tmpDataX = [];
        var Xn = this.props.choosenX;
        for (var i = 0; i < XYdata.length; i++) {
          tmpDataX.push(XYdata[i][Xn]);
        }
        this.setState(
          {
            DataX: tmpDataX,
          },
          () => console.log("Data Fetched...", this.state.DataX)
        );
      });
    var linkY = "/XYdata/" + this.props.choosenY;
    fetch(linkY)
      .then((res) => res.json())
      .then((XYdata) => {
        let tmpDataY = [];
        var Yn = this.props.choosenY;
        for (var i = 0; i < XYdata.length; i++) {
          tmpDataY.push(XYdata[i][Yn]);
          JsonData.push({ y: tmpDataY[i], label: this.state.DataX[i] });
        }
        this.setState(
          {
            DataY: tmpDataY,
            TotalPoints: JsonData,
          },
          () =>
            console.log(
              "Data Fetched...",
              this.state.DataY,
              this.state.TotalPoints
            )
        );
      });
  }
  render() {
    const options = {
      exportEnabled: true,
      animationEnabled: true,
      title: {
        text:
          "Pie Chart between " +
          this.props.choosenX +
          " and " +
          this.props.choosenY,
      },
      data: [
        {
          type: "pie",
          startAngle: 75,
          toolTipContent: "{label}: {y}",
          showInLegend: "true",
          legendText: "{label}",
          indexLabelFontSize: 16,
          indexLabel: "{label} - {y}",
          dataPoints: this.state.TotalPoints,
        },
      ],
    };

    return (
      <div>
        <Row>
          <Col>
            <Container>
              <div
                style={{
                  position: "relative",
                  left: "700px",
                  top: "200px",
                  width: "1000px",
                }}
              >
                <h1>React Pie Chart</h1>
                <CanvasJSChart options={options} />
              </div>
            </Container>
          </Col>
        </Row>
      </div>
    );
  }
}
export default PieChart;
