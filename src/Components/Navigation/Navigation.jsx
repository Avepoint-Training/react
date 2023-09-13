import React from "react";
import "./index.css";
import Image from "../../Base/Image.jsx";
import { BsList } from "react-icons/bs";
export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: [
        { name: "Home" },
        { name: "About" },
        { name: "Services" },
        { name: "Products" },
        { name: "List" },
        { name: "Support" },
      ],
      isShowMobileMenu: false,
    };
  }

  handleOpenMobileMenu = (status) => {
    this.setState({
      isShowMobileMenu: status ? status : !this.state.isShowMobileMenu,
    });
  };

  render() {
    return (
      <div className="nav">
        <div className="nav-logo">
          <img src={Image.logo} alt="logo" />
        </div>
        <div className="nav-items">
          {this.state.nav.map((item, index) => {
            return (
              <div
                key={index}
                className={`nav-item ${index === 0 && "active"}`}
              >
                {item.name}
              </div>
            );
          })}
          <div
            className="nav-item"
            onClick={() => this.handleOpenMobileMenu(true)}
          >
            <BsList />
          </div>
        </div>
        <div
          id="mobile-nav"
          className={`sidenav-mobile ${
            this.state.isShowMobileMenu ? "active-mobile" : ""
          }`}
          onClick={(e) => {
            this.handleOpenMobileMenu(false);
          }}
        >
          <div
            id="sidenav-mobile-content"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div
              className="closebtn"
              onClick={() => this.handleOpenMobileMenu(false)}
            >
              <span>&times;</span>
            </div>
            {this.state.nav.map((item, index) => {
              return (
                <div className={`link ${index === 0 && "active"}`} key={index}>
                  {item.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
