import React, { Component } from "react";
import Header from "./Header";
import Item from "./Item";
import "./glassesApp.css";

export default class GlassesApp extends Component {
  render() {
    return (
      <div className="main-bg">
        <div className="overlay"></div>
        <img src="./glassesImage/background.jpg" alt="" className="bg-image" />
        <Header />
        <Item />
      </div>
    );
  }
}
