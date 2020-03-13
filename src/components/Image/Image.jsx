import React from "react";

function Image(props) {
    return (
        <picture>
            <img src={props.src} alt=""/>
        </picture>
    )
}

export default Image;