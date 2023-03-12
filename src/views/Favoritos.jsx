import Context from '../Context';
import { useContext } from 'react';
import '../assets/css/galeria.css';

export default function Favoritos() {
  const {photo} = useContext(Context);

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-5">
        {photo.filter((foto) => foto.liked).map((fotos) => (
          <div key={fotos.id} className='foto' style={{backgroundImage:`url(${fotos.src.tiny})`}} >
          <p>{fotos.alt}</p>
        </div>
        ))}
      </div>
    </div>
  );
}