import React, { useState } from 'react';
import './login.css';
import user_icon from '../Assets/person.png';
import password_icon from '../Assets/password.png';
import email_icon from '../Assets/email.png';
const Login = () =>{
   const [action, setAction] = useState("Login");
   return (
    <div className="container">
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
      <div className="inputs">
      {action==="Login"?<div></div>:<div className="input">
            <img src={user_icon} alt="" />
            <input type="user" placeholder="Nombre"/>
        </div> }

        <div className="input">
            <img src={email_icon}  alt="" />
            <input type="email" placeholder="Email" />
        </div>

        <div className="input">
            <img src={password_icon}  alt="" />
            <input type="password" placeholder="Contraseña" />
        </div>
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
    </div>
   );
};
export default Login;