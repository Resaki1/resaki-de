import React from "react";
import ImageDetails from "./ImageDetails/ImageDetails";
import "./Image.css";

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showDetails: false };
  }

  render() {
    return (
      <div
        className="imageWrapper"
        onClick={() => console.log("click")}
        onMouseEnter={() => this.setState({ showDetails: true })}
        onMouseLeave={() => this.setState({ showDetails: false })}
      >
        <ImageDetails
          className={this.state.showDetails ? "showDetails" : "hideDetails"}
        />
        <picture>
          <img src={this.props.src} alt="" />
        </picture>
      </div>
    );
  }
}

export default Image;
