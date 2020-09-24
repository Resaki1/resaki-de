import React from "react";
import Firebase from "../../Firebase/firebase";
import Header from "../../Header/Header";
import "./Landscape.css";

class Landscape extends React.Component {
  storafeRef = Firebase.storage().ref("Landscape");
  render() {
    return (
      <section id="landscape">
        <Header title="Landschaftsfotografie" />
      </section>
    );
  }
}

export default Landscape;
