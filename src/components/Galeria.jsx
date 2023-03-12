import "../assets/css/galeria.css";
import React, { useContext } from "react";
import Context from "../Context";
import Heart from "./Heart";

export default function Home() {
  const {photo, setPhoto} = useContext(Context);

  const Liked_Click = (id) => {
    const indexPhoto = photo.findIndex((e) => e.id === id);
    photo[indexPhoto].liked = !photo[indexPhoto].liked;
    setPhoto([...photo]);
  };

  return (
    <div className="galeria grid-columns-5 p-3">
      {photo.map(BDfotos => (
        <div key={BDfotos.id} className='foto' style={{backgroundImage:`url(${BDfotos.src.tiny})`}} >
          <Heart filled={(BDfotos.liked)} onClick={() => Liked_Click(BDfotos.id)} />
          <p>{BDfotos.alt}</p>
        </div>
      ))}
    </div>
  );
}