import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import React, { useState, useEffect } from "react";
import Context from "./Context";

export default function App() {

  const [photo, setPhoto] = useState([]);
  const compartirFotos = {photo, setPhoto};

  const fotosApi = async () => {
    const res = await fetch('/fotos.json');
    const resFotos = await res.json();
    setPhoto(resFotos.photos)
  }

  useEffect(() => {
    fotosApi()
  }, [])

  return (
    <div className="App">
      <Context.Provider value={compartirFotos}>
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