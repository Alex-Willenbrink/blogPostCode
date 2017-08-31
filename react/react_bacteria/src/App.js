import React, { Component } from "react";
import "./App.css";
import SvgContainer from "./SvgContainer";
const shortid = require("shortid");
const gaussian = require("gaussian");

// Declare our svgContainer first
const svgContainer = {
  width: 500,
  height: 500
};

function findContainerCenter(container) {
  return {
    xPos: Math.floor(container.width / 2),
    yPos: Math.floor(container.height / 2)
  };
}

const containerCenter = findContainerCenter(svgContainer);

const findNewGaussValue = (mean, std, min, max) => {
  const distribution = gaussian(mean, Math.pow(std, 2));
  const valueReturn = distribution.ppf(Math.random());

  return valueReturn > max
    ? max
    : valueReturn < min ? min : Math.round(valueReturn);
};

const findNewRGB = colorArray => {
  return colorArray.map((colorValue, i) => {
    if (i === 3) return 1;
    return findNewGaussValue(colorValue, 10, 0, 255);
  });
};

const divideCircle = parent => {
  const colorArray = findNewRGB(parent.fillArray);
  console.log(colorArray);

  return {
    posX: parent.posX + findNewGaussValue(0, 20, -50, 50),
    posY: parent.posY + findNewGaussValue(0, 20, -50, 50),
    radius: findNewGaussValue(parent.radius, 1, 8, 25),
    fillArray: colorArray,
    fill: `rgba(${colorArray[0]}, ${colorArray[1]}, ${colorArray[2]}, ${colorArray[3]})`,
    id: shortid.generate()
  };
};

const circle1 = {
  posX: containerCenter.xPos,
  posY: containerCenter.yPos,
  radius: 15,
  fillArray: [125, 125, 125, 1],
  fill: "rgba(125, 125, 125, 1)",
  id: shortid.generate()
};

const circle2 = divideCircle(circle1);

let circles = [circle1, circle2];
svgContainer.circles = circles;

class App extends Component {
  removeCircle = circleId => {
    circles = circles.filter(circle => circle.id !== circleId);

    this.setState({
      circles
    });
  };

  handleClick = event => {
    this.removeCircle(event.target.id);
  };

  render() {
    return (
      <div className="App">
        <SvgContainer {...svgContainer} />
      </div>
    );
  }
}

export default App;
