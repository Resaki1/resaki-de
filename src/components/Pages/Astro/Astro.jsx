import React from "react";
import Image from "../../Image/Image";
import Header from "../../Header/Header";
import "./Astro.css";

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("../../../images/astro", false, /\.(jpe?g)$/)
);

class Astro extends React.Component {
  render() {
    return (
      <section id="astro">
        <Header title="Astrofotografie" />
        {images.map((link, index) => (
          <Image src={link} key={"astro" + index} />
        ))}
      </section>
    );
  }
}

export default Astro;
