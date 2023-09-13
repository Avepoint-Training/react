import React from "react";
import "./index.css";
import Image from "../../Base/Image.jsx";

export default class Event extends React.Component {
  render() {
    return (
      <div className="event-container">
        <div className="day">
          <div>{this.props.data.day}</div>
          <div>Jan</div>
        </div>
        <div className="evetn-info">
          <div className="name">{this.props.data.name}</div>
          <div className="range-date">
            <img src={Image.clock} alt="range-date" />
            <span>{this.props.data.time}</span>
          </div>
        </div>
      </div>
    );
  }
}
