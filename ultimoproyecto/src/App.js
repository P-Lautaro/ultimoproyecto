import './App.css';
import Login from './componentes/Login/login'; 
import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(false)
  useEffect(()=>{
    
  })
  return (
    <div>
      <Login/>
    </div>
  );
}

export default App;
