import React, { Component } from "react";
import { DateRange } from "react-date-range";
import List from "./List";

const viewContainer = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItem: "center"
};
const mainConatiner = {
  height: "100vh",
  width: "100vw",
  //   backgroundColor: "#cce2ff"
  backgroundColor: "#d1e9ea"
};

const calender = {};
const calenderContainer = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItem: "center",
  marginTop: "5px",
  position: "absolute",
  left: "28%",
  boxShadow: "0px 10px 20px rgba(00,00,00,.27)"
};
const boxView = {
  display: "flex",
  border: "1px solid #474645",
  borderRadius: "5px",
  padding: "10px 20px",
  backgroundColor: "#474645",
  marginTop: "10%",
  color: "#fff"
};
class RangePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          id: "1",
          firstname:
            "simply dummy text of the printing and typesetting industry",
          lastname:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          year: 1988
        },
        {
          id: "2",
          firstname: "standard dummy text ever since the 1500s",
          lastname: "simply dummy text of the printing",
          year: 1880
        },
        {
          id: "3",
          firstname: "standard dummy text ever since the 1500s",
          lastname: "simply dummy text of the printing",
          year: 1880
        },
        {
          id: "4",
          firstname: "standard dummy text ever since the 1500s",
          lastname: "simply dummy text of the printing",
          year: 1880
        }
      ],
      date: {
        display: "none"
      }
    };
  }
  handleSelect(range) {
    console.log(range);
  }

  mouseEvent(e) {
    this.setState({ date: { display: "block" } });
    this.setState({ visible: true });
  }

  handleClickOutSide = () => {
    this.setState({ date: { display: "none" } });
  };

  render() {
    console.log(this.props);
    return (
      <div style={mainConatiner}>
        <div
          className="calender"
          style={viewContainer}
          onClick={e => this.mouseEvent(e)}
        >
          <div style={boxView}>{"Date-Month-Year"}</div>
        </div>
        <div style={this.state.date}>
          <div style={calenderContainer}>
            <DateRange
              style={calender}
              onInit={this.handleSelect}
              onChange={this.handleSelect}
            />
          </div>
        </div>

        <List listItems={this.state.list}>
          <h1>yes</h1>
        </List>
      </div>
    );
  }
}

export default RangePicker;
