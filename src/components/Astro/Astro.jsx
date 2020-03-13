import React from "react";
import Image from "../Image/Image";

function importAll(r) {
    return r.keys().map(r);
  }
  
const images = importAll(require.context('../../images/astro', false, /\.(jpe?g)$/));

class Astro extends React.Component {
    render() {
        return (
            <>
                {images.map((image, index) => (
                    <Image src={image} key={"astro"+index} />
                ))}
            </>
        )
    }
}

export default Astro;