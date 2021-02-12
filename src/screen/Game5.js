import React from "react";
import { Link } from "react-router-dom";
import ProgresBar from "../components/ProgresBar";
import Select from "../components/Select";

import Timer from "../components/Timer";

class Game5 extends React.Component {
  render() {
    return (
      <div> 
      <ProgresBar indicator={285} width={285}/>
      <section className="encart">
      <Timer />
      <h2 className="titreJeux">
      <span>5</span> Choisi ta boisson</h2>
        <Select name="Boisson" />
        <Link to="/bilan" className="bouton">Passer au bilan</Link>
    </section>
  </div>
    );
  }
}

export default Game5;
