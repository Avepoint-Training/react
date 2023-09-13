import React from "react";
import Image from "../../Base/Image.jsx";
import "./index.css";

export default class Faq extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      faqs: props.data,
    };
  }

  componentDidMount() {}

  handleToggleActive = (i) => {
    this.props.handleToggleActive(i);
  };

  render() {
    return (
      <>
        <div
          className={`faqs-header ${
            this.props.data.isOpen ? "active-header" : ""
          }`}
          onClick={() => this.handleToggleActive(this.props.id)}
        >
          {!this.props.data.isOpen && (
            <img src={Image.collapse} alt="collapse" />
          )}
          {this.props.data.isOpen && <img src={Image.expand} alt="expand" />}
          <span>{`${this.props.data.title}`}</span>
        </div>
        <div
          className={`faqs-content ${this.props.data.isOpen ? "active" : ""}`}
        >
          <div>{this.props.data.content}</div>
        </div>
      </>
    );
  }
}
