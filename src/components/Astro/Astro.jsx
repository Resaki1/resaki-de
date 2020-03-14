import React from "react";
import Image from "../Image/Image";

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("../../images/astro", false, /\.(jpe?g)$/)
);

class Astro extends React.Component {
  render() {
    console.log(images);
    return (
      <>
        {images.map((link, index) => (
          <Image src={link} key={"astro" + index} />
        ))}
      </>
    );
  }
}

export default Astro;
