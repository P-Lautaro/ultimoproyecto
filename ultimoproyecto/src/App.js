import React from "react";
import './App.css';
import Login from './componentes/Login/login'; 
import { useState, useEffect } from 'react';
import HashLoader from "react-spinners/HashLoader";
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './home';
import Cistado from "./componentes/clistado";
import MListado from "./componentes/mlistado";
import Register from "./componentes/register";
import PulseLoader from "react-spinners/PulseLoader";

function App() {
  const [loading, setLoading] = useState(false)
  useEffect(()=>{
  setLoading(true)
  setTimeout(()=>{
  setLoading(false);
  },3000);
  },[]);

  return (
    <div className="App">
      {
        loading? 
        <PulseLoader
        color={'#36d7b7'}
        loading={loading}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader" /> :
        <Router>
        <Routes>
            <Route exact path="/" element={<Login/>}/>
            <Route path="/Home" element={<Home/>} />
            <Route path="/Crear-Listado" element={<Cistado/>}/>
            <Route path="/Tomar-Asistencia" element={<MListado/>}/>
            <Route path="/Registro" element={<Register/>} />
        </Routes>
      </Router>
      }
  
    </div>
  );
}

export default App;
