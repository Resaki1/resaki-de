import React from "react";
import "./Home.css";
import tulpen from "../../../images/home/flowers.jpg";

class Home extends React.Component {
  render() {
    return (
      <section id="home">
        <img src={tulpen} alt="Tulpen" />
      </section>
    );
  }
}

export default Home;
