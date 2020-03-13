import React from "react";

function importAll(r) {
    return r.keys().map(r);
  }
  
const images = importAll(require.context('../../images/astro', false, /\.(jpe?g)$/));

class Astro extends React.Component {
    render() {
        console.log(images)
        return (
            <>
                {images.map((image, index) => (
                    <img src={image} key={"astro"+index}></img>
                ))}
            </>
        )
    }
}

export default Astro;