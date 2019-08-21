import React, { Component } from "react";
import CardBody from "./ListItems";
import CardHeader from "./CardHeader";

const list = {
  listStyleType: "none",
  display: "flex",
  flexDirection: "column",
  marginRight: "10px"
};
const cardContainer = {
  height: "auto",
  border: "1px solid grey",
  backgroundColor: "grey"
};
class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      positive: [
        {
          name: "Admin",
          age: 36,
          rights: ["price", "Money", "fuel"]
        },
        {
          name: "software",
          age: 36,
          rights: ["handle", "contributor"]
        }
      ]
    };
  }

  //   getValue() {
  //     for (let [key, value] of Object.entries(this.state.positive)) {
  //       this.state.positive.push(value);
  //       console.log(this.state.positive);
  //     }
  //   }
  componentDidMount() {}

  render() {
    return (
      <div style={cardContainer}>
        <CardHeader Title="Nagitive" />
        <CardBody list={list} tags={[this.state.positive]} />
      </div>
    );
  }
}

export default Card;
