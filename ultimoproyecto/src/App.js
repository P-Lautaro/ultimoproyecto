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

function App() {
  const [loading, setLoading] = useState(false)
  useEffect(()=>{
  setLoading(true)
  setTimeout(()=>{
  setLoading(false);
  },3000);
  },[]);

  return (
    <Router>
      <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route path="/Home" element={<Home/>} />
          <Route path="/Cistado" element={<Cistado/>}/>
          <Route path="/MListado" element={<MListado/>}/>
      </Routes>
    </Router>
  );
}

export default App;
