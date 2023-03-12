import "../assets/css/galeria.css";
import { useContext } from "react";
import Heart from "./Heart";
import Context from "../Context";

export default function Home() {

  const {photo,setPhoto} = useContext (Context);

  const Like_Click = (id) => {
    const photo_id = photo.findIndex((e)=> e.id === id);
    photo[photo_id].liked = !photo[photo_id].liked;
    setPhoto([...photo]);
  };



  return (
    <div className="galeria grid-columns-5 p-3">
      {photo.map(e => (
        <div key={e.id} className='foto' style={{backgroundImage:`url(${e.src.tiny})`}} >
          <Heart filled={(e.liked)} onClick={() => Like_Click(e.id)} />
          <p>{e.alt}</p>
        </div>
      ))}
    </div>
  );
}