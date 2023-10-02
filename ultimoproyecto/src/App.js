import './App.css';
import Login from './componentes/Login/login'; 
import { useState, useEffect } from 'react';
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [loading, setLoading] = useState(false)
  useEffect(()=>{
  setLoading(true)
  setTimeout(()=>{
  setLoading(false)
  },5000)
  },[])

  return (
    <div className='App'>
      {loading ? (
        <HashLoader
        color="rgba(54, 215, 183, 1)"
        cssOverride={{}}
        loading
        size={0}
      />
      ) : (
        <div>
          <Login />
        </div>
      )}
    </div>
  );
}

export default App;
