import React from "react";
import logo from "../../ressources/logo512.png";
import "./Header.css";

export default function Header(props) {
  return (
    <div className="wrapper" id={props.id}>
      <h1
        style={
          props.logo
            ? {
                float: "right",
                marginRight: "5vmin"
              }
            : undefined
        }
      >
        {props.logo ? (
          <img src={logo} className="logo" alt="logo" />
        ) : (
          undefined
        )}
        {props.title}
      </h1>
    </div>
  );
}
