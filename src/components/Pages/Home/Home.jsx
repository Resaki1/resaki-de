import React from "react";
import Header from "../../Header/Header";
import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <section id="home">
        <Header />
        <img
          className="homeImage"
          src="https://firebasestorage.googleapis.com/v0/b/resaki-de.appspot.com/o/Images%2Finfrared%2FZastler%20Valley.jpg?alt=media&token=5580becf-8937-43b7-873a-108f88c28dd2"
          alt="Zastler Valley in infrared"
        />
      </section>
    );
  }
}

export default Home;
