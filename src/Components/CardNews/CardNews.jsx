import React from "react";
import "./index.css";
import Image from "../../Base/Image.jsx";

export default class CardNews extends React.Component {
  render() {
    return (
      <div className="card-container">
        <img src={this.props.data.img} alt="news" />
        <div className="card-info">
          <div className="name">{this.props.data.name}</div>
          <div className="detail">{this.props.data.detail}</div>
          <div className="footer">
            <div className="date-container">
              <img src={Image.date} alt="date" />
              <span>{this.props.data.date}</span>
            </div>
            <div className="label-user">{this.props.data.user}</div>
          </div>
        </div>
      </div>
    );
  }
}
