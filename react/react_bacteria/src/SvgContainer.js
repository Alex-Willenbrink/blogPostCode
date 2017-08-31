import React from "react";
import Circle from "./Circle";

class SvgContainer extends React.Component {
  constructor(props) {
    super(props);

    const { width, height, circles } = this.props;
    this.state = {
      width,
      height,
      circles
    };
  }

  render() {
    const svgCircles = this.state.circles.map(circle =>
      <Circle {...circle} handleClick={this.handleClick} key={circle.id} />
    );
    const { width, height } = this.state;

    return (
      <svg width={width} height={height}>
        {svgCircles}
      </svg>
    );
  }
}

export default SvgContainer;
