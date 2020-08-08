import React from "react";
import "./Header.css";

export default function Header(props) {
  return (
    <div className="wrapper" id={props.id}>
      <h1>{props.title}</h1>
    </div>
  );
}
