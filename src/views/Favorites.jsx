import Context from '../Context';
import { useContext } from 'react';
import '../assets/css/galeria.css';

export default function Favorites() {
  const {photo} = useContext(Context);

  return (
    <div>
      <h1>Favorite Photographs</h1>
      <div className="p-3 galeria grid-columns-5">
        {photo.filter((e) => e.liked).map((BDfotos) => (
          <div key={BDfotos.id} className='foto' style={{backgroundImage:`url(${BDfotos.src.tiny})`}} >
          <p>{BDfotos.alt}</p>
        </div>
        ))}
      </div>
    </div>
  );
}