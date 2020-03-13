import React from "react";

function Image(props) {
    return (
        <picture key={props.key}>
            <img src={props.src} />
        </picture>
    )
}

export default Image;