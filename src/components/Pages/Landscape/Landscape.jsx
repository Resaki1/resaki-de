import React from "react";
import firebase from "firebase/app";
import "firebase/storage";
import Image from "../../Image/Image";
import Header from "../../Header/Header";
import "./Landscape.css";

function Landscape() {
  const [imageUrls, setImageUrls] = React.useState([]);

  React.useEffect(() => {
    const storageRef = firebase.storage().ref("Landscape");
    storageRef.listAll().then(function(result) {
      result.items.forEach(function(imageRef) {
        imageRef.getDownloadURL().then(function(url) {
          setImageUrls(imageUrls => [...imageUrls, url]);
        });
      });
    });
  }, []);

  return (
    <section id="landscape">
      <Header title="Landschaftsfotografie" />
      {imageUrls.map((url, index) => {
        return (
          <Image
            src={url}
            key={`landscape ${index}`}
            alt={`landscape no. ${index}`}
          />
        );
      })}
    </section>
  );
}

export default Landscape;
