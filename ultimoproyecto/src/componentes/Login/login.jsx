import React, { useState } from 'react';
import './login.css';
//import { useAuth } from './AuthContext.jsx'; 
import { authContext } from '../../context/AuthContext';

const Login = () => {
  const { login, loginWithGoogle } = useAuth (''); // Usa el método de autenticación desde el contexto
  const [ action, setAction ] = useState("Login");
 

  const handleLogin = async (email, password) => {
    try {
      await login(email, password);
      history.push('/');
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      history.push('/');
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? null : (
          <div className="input">
            <input type="text" placeholder="Name" />
          </div>
        )}
        <div className="input">
          <input type="email" placeholder="Email Id" />
        </div>
        <div className="input">
          <input type="password" placeholder="Password" />
        </div>
      </div>

      {action === "Sign Up" ? (
        <div className="forgot-password"> Lost Password? <span>Click Here!</span></div>
      ) : null}
      <div className="submit-container">
        <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => setAction("Sign Up")}>
          Sign Up
        </div>
        <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => setAction("Login")}>
          Login
        </div>
        {/* Botón de inicio de sesión con Google */}
        <div className="submit" onClick={handleGoogleLogin}>
          Google Login
        </div>
        {/* Otros botones de inicio de sesion GitHub y Anónimo*/}
      </div>
      {action==="Sign Up"?<div></div>:<div className="forgot-password"> <a href="#">¿Has olvidado tu contraseña?</a></div>} 
      
      <div className="submit-container">
       <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => {
       console.log("Botón Sign Up clickeado");
       setAction("Sign Up");
       }}>Registrarse</div>
       <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => {
       console.log("Botón Login clickeado");
       setAction("Login");
       }}>Ingresar</div>
      </div>
    
  );
};


export default Login;
