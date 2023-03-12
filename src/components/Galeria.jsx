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
      {photo.map(fotos => (
        <div key={fotos.id} className='foto' style={{backgroundImage:`url(${fotos.src.tiny})`}} >
          <Heart filled={(fotos.liked)} onClick={() => Liked_Click(fotos.id)} />
          <p>{fotos.alt}</p>
        </div>
      ))}
    </div>
  );
}