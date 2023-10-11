import './App.css';
import Login from './componentes/Login/login'; 
import { useState, useEffect } from 'react';
import HashLoader from "react-spinners/HashLoader";
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './home';

function App() {
  const [loading, setLoading] = useState(false)
  useEffect(()=>{
  setLoading(true)
  setTimeout(()=>{
  setLoading(false);
  },3000);
  },[]);

  return (
    <AuthProvider>
    <div className='App'>
      {loading ? (
        <div className="loader-container">
          <HashLoader
            color="#36d7b7"
            loading={loading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div>
          <Login />
        </div>
      )}
    </div>
    <Route path="/home" element={<Home/>} />
    </AuthProvider>

  );
}

export default App;
