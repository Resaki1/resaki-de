import React from "react";
import firebase from "firebase/app";
import "firebase/storage";
import Image from "../Image/Image";
import Header from "../Header/Header";
import "./ImageContent.css";

function ImageContent(props) {
  const [imageUrls, setImageUrls] = React.useState([]);

  React.useEffect(() => {
    const storageRef = firebase.storage().ref(`Images/${props.name}`);
    storageRef.listAll().then(function(result) {
      result.items.forEach(function(imageRef) {
        imageRef.getDownloadURL().then(function(url) {
          setImageUrls(imageUrls => [...imageUrls, url]);
        });
      });
    });
  }, [props]);

  return (
    <section id={props.name} className="imageContent">
      <Header title={props.title} />
      {imageUrls.map((url, index) => {
        return (
          <Image
            src={url}
            key={`${props.name} ${index}`}
            alt={`${props.name} no. ${index}`}
          />
        );
      })}
    </section>
  );
}

export default ImageContent;
