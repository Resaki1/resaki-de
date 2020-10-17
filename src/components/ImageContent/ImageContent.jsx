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
        const imageName = imageRef.location.path
          .split("/")
          .pop()
          .split(".")
          .shift();
        imageRef.getDownloadURL().then(function(imageUrl) {
          setImageUrls(imageUrls => [
            ...imageUrls,
            {
              name: imageName,
              url: imageUrl
            }
          ]);
        });
      });
    });
  }, [props]);

  return (
    <section id={props.name} className="imageContent">
      <Header title={props.title} />
      {imageUrls.map((image, index) => {
        return (
          <Image
            src={image.url}
            name={image.name}
            key={`${props.name} ${index}`}
            alt={`${image.name}`}
          />
        );
      })}
    </section>
  );
}

export default ImageContent;
