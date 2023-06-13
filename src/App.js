
/* import */
import './App.css';
import { Route, Routes } from "react-router-dom"
import Navbar from './Component/Navbar';
import PhoneNavbar from './Component/Phone/PhoneNavbar';
import Home from "./Pages/Home";
import Actions from "./Pages/Actions";
import React, { useState, useEffect } from 'react';

export default function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Mettre à jour la largeur de la fenêtre lorsqu'elle est redimensionnée
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);  
    }, []);   
  return (
    <>

    <div>
      {windowWidth > 1350 ? <Navbar/> : <PhoneNavbar />}
    </div>

    <div className='Main-Container'>

         <Routes>        
          <Route path="react-deploy" element={<Home />}/>
          <Route path="Actions" element={<Actions />}/>
        </Routes>

    </div>   
  </>
  ); 
}
