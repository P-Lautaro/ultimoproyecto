import './App.css';
import Login from './componentes/Login/login'; 
import { useState, useEffect } from 'react';

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
      <div>
        <Login/>
      </div>
    </div>
  );
}

export default App;
