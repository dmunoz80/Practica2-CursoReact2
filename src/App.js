import "./styles.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Context from "./Context";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";


export default function App() {
 
  
  const [fotos, setFotos] = useState([]);
  const estadoCompartido = {fotos, setFotos};
  
  const fotosApi = async () => {
    const responseFotos = await fetch("/fotos.json");
    const responseFotosJSON = await responseFotos.json();
    setFotos(responseFotosJSON.photos)
  }

  useEffect(() => {
    fotosApi()
  }, [])

  return (
    <div className="App">
      <Context.Provider value={estadoCompartido}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>      
    </div>
  );
}