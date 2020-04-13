import React from "react";
import classNames from "classnames";
import "./ImageDetails.css";

function ImageDetails(props) {
  return (
    <div className={classNames("imageDetails", props.className)}>
      <div>Details</div>
      <div>Download</div>
      <div>Shop</div>
    </div>
  );
}

export default ImageDetails;
