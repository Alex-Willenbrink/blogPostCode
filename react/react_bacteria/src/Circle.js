import React from "react";

class Circle extends React.Component {
  constructor(props) {
    super(props);
    const { posX, posY, radius, fill, handleClick, id } = this.props;
    this.state = { posX, posY, radius, fill, handleClick, id };
  }

  render() {
    const { posX, posY, radius, fill, handleClick, id } = this.state;

    return (
      <circle
        onClick={handleClick}
        cx={posX}
        cy={posY}
        r={radius}
        fill={fill}
        id={id}
      />
    );
  }
}

export default Circle;
