import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Favorites from "./views/Favorites";
import React, { useState, useEffect } from "react";
import Context from "./Context";

export default function App() {

  const [photo, setPhoto] = useState([]);
  const LikePhoto = {photo, setPhoto};

  const ApiPhoto = async () => {
    const res = await fetch('/BDfotos.json');
    const resPhoto = await res.json();
    setPhoto(resPhoto.photos)
  }

  useEffect(() => {
    ApiPhoto()
  }, [])

  return (
    <div className="App">
      <Context.Provider value={LikePhoto}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
      </Context.Provider>
    </div>
  );
}