import React from "react";
import { AiFillSetting } from "react-icons/ai";
import { BiSolidBellRing } from "react-icons/bi";
import { BsQuestion } from "react-icons/bs";
import { CgMenuGridO } from "react-icons/cg";
import InputCustom from "../InputCustom/InputCustom";
import "./index.css";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <div id="header-left">
          <CgMenuGridO />
          <span>SharePoint</span>
        </div>
        <InputCustom placeholder="Search in SharePoint" />
        <div id="header-right">
          <BiSolidBellRing />
          <AiFillSetting />
          <BsQuestion />
          <img src="https://picsum.photos/200" alt="avatar" />
        </div>
      </header>
    );
  }
}
