import React from "react";
import "./Home.css";
import tulpen from "../../images/home/flowers.jpg";

class Home extends React.Component {
  render() {
    return <img src={tulpen} alt="Tulpen" />;
  }
}

export default Home;
