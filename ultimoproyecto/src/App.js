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
        <ClipLoader
          color={color}
          loading={loading}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
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
