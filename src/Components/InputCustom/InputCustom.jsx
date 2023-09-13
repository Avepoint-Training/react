import React from "react";
import Image from "../../Base/Image.jsx";
import "./index.css";

export default class InputCustom extends React.Component {
  render() {
    return (
      <div id="input-common" {...this.props}>
        <img src={Image.search} alt="search" />
        <input
          type="text"
          placeholder={this.props?.placeholder}
          onChange={(e) => {
            if (this.props.onChange) {
              this.props.onChange(e);
            }
          }}
        />
      </div>
    );
  }
}
