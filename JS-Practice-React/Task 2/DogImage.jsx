import { useEffect, useState } from "react";
import "./DogImage.css";

function DogImage() {
  const [imageUrl, setImageUrl] = useState("");
  const URL = "https://dog.ceo/api/breeds/image/random";

  useEffect(() =>{
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setImageUrl(data.message));
  },[]);

  return ( 
  <>
    <div className="dog-container">
      <div className="dog-container__title">Случайная картинка собаки</div>
      {imageUrl ?
        <img className="dog-container__image" src={imageUrl} alt="Dog"></img> : 
        <p>Loading</p>}
    </div>
  </>
  );
}

export default DogImage