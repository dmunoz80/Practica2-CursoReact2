import Context from '../Context';
import { useContext } from 'react';
import '../assets/css/galeria.css';

export default function Favoritos() {

  const {fotos} = useContext (Context);
  
  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-5">
        {fotos.filter((picture) => {
          if (picture.liked === true) {
            return picture;
          }
        }).map((picture,index) => {return(<div key={index} className="foto" style={{backgroundImage: `url(${picture.src.medium})`}}>
          <p>{picture.alt}</p>
        </div>)})
        }
      </div>
    </div>
  );
}