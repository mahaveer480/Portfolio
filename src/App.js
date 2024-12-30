import React from "react";
import Navbar from "./components/Navbar";
import MainSection from "./components/mainseaction";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Artworks from './pages/artworks';
import CheatBox from './pages/cheat_box';
import Websites from './pages/websites';
import "./styles/home.css";

function App() {
  return (
    <div>
<h1>hallow would
  
</h1>
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Artworks" element={<Artworks />} />
          <Route path="/cheat" element={<CheatBox />} />
          <Route path="/Websites" element={<Websites />} />
        </Routes>
      </Router>
    </div>


    </div>
  );
}

export default App;
