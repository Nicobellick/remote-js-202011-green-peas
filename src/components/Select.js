import React, { Component } from "react";
import test from "../data/json/test.json";
import defaultImgDish from "../data/images/dish.svg";

export default class Select extends Component {
  state = {
    imgDefault: defaultImgDish,
    imgDefaultAlt: "Choisis ton entrée",
    classBt: "bouton off",
    value: "",
  };
  componentDidMount() {
    const select=document.querySelector('.select')
    this.setState({ value: select.value})
  }
  componentWillUnmount() {
      const select= document.querySelector('.select');

      const objselect = (obj) => {
        const rObj ={};
        rObj["name"] = obj.options[obj.selectedIndex].text;
        rObj["carbone"] = obj.value;
        return rObj;
      }

      this.props.handleScoreGlobal(parseFloat(select.value))
      this.props.addMenu(objselect(select))
      
     }


  
  render() {
    const gameFood = test.filter((data) =>
      data["Catégorie Jeux"].includes(this.props.name)
    );
    const remainingGameFood = gameFood.slice(0);
    const randomTen = [];
    while (randomTen.length < 10)
      randomTen.push(
        remainingGameFood.splice(
          Math.floor(Math.random() * remainingGameFood.length),
          1
        )[0]
      );
    return (
      <>
        <select className="select">
          {randomTen.map((item, index) => (
            <option key={index} value={item["Changement climatique (kg CO2 eq/kg de produit)"]}>
              {item["Nom du Produit en Français"]}
            </option>
          ))}
        </select>
        <img
          className="dish"
          src={this.state.imgDefault}
          alt={this.state.imgDefaultAlt}
        />
      </>
    );
  }
}