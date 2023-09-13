import React from "react";
import Image from "../../Base/Image";
import "./index.css";

export default class Doc extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      faqs: props.data,
    };
  }

  render() {
    return (
      <div>
        <h4 className="sub-title">{this.props.title}</h4>
        {this.props.data.map((item, i) => (
          <div key={i} className="doc-gallery-item">
            <img src={item.icon} alt="icon" />
            <span>{`${item.name} ${i + 1}`}</span>
          </div>
        ))}
        <div className="view-more">
          View more <img src={Image.arrowicon} alt="view-more" />
        </div>
      </div>
    );
  }
}
