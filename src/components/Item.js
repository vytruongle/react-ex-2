import React, { Component } from "react";
import "./Item.css";

export default class Item extends Component {
  glassesItem = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./glassesImage/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "./glassesImage/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "./glassesImage/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "./glassesImage/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./glassesImage/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./glassesImage/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./glassesImage/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];

  state = {
    name: "",
    desc: "",
    url: "",
  };

  handleChooseGlass = (item) => {
    this.setState({
      name: item.name,
      desc: item.desc,
      url: item.url,
    });
  };
  renderGlassesList = () => {
    let contentTable = this.glassesItem.map((item) => {
      return (
        <div
          onClick={() => {
            this.handleChooseGlass(item);
          }}
          key={item.id}
          className="col-lg-2 col-md-2 col-12 mb-4"
        >
          <img
            src={item.url}
            alt=""
            className="w-100"
            style={{ cursor: "pointer" }}
          />
        </div>
      );
    });
    return contentTable;
  };
  render() {
    return (
      <div>
        <div className="main-item">
          <div className="container">
            <div className="model">
              <div className="card">
                <img
                  className="card-img-top"
                  src="./glassesImage/model.jpg"
                  alt="Title"
                />
                <div className="card-body">
                  <h4 className="card-title">{this.state.name}</h4>
                  <p className="card-text">{this.state.desc}</p>
                </div>
              </div>
              <img
                src="./glassesImage/model.jpg"
                alt=""
                className="image-model"
              />
              <img src={this.state.url} alt="" className="glass-image" />
            </div>
            <div className="glasses">
              <div className="row p-5">{this.renderGlassesList()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
