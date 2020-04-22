import React from "react";
import "./Header.css";

export default function Header(props) {
  return (
    <div className="wrapper">
      <h1>{props.title}</h1>
    </div>
  );
}
