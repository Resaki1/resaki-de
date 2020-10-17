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
        onClick={() => this.setState({ showDetails: !this.state.showDetails })}
        onMouseEnter={() => this.setState({ showDetails: true })}
        onMouseLeave={() => this.setState({ showDetails: false })}
      >
        <ImageDetails
          imageName={this.props.name}
          className={this.state.showDetails ? "visible" : "hidden"}
        />
        <picture>
          <img src={this.props.src} alt="" />
        </picture>
      </div>
    );
  }
}

export default Image;
