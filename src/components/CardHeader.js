import React, { Component } from "react";

const card = {
  display: "flex",
  flexDirection: "column"
};
class CardHeader extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="card-container">
        <div style={card}>{this.props.Title}</div>
      </div>
    );
  }
}

export default CardHeader;
