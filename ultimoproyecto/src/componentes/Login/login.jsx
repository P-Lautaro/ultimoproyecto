import React, { useState } from 'react';
import './login.css';

import user_icon from '../Assets/person.png';
import password_icon from '../Assets/password.png';
import email_icon from '../Assets/email.png';
import ErrorMessage from './ErrorMessage';

const Login = () =>{

   const [action, setAction] = useState("Login");
   const [error, setError] = useState(""); 

  const handleLogin = () => {
    const isInvalid = true; 
    if (isInvalid) {
      setError("Nombre de usuario, correo o contraseña incorrectos");
    } else {
      setError(""); 
      
    }
  };

   return (
    <div className="container">
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
      <div className="inputs">
      {action==="Login"?<div></div>:<div className="input">
            <img src={user_icon} alt="" />
            <input type="user" placeholder="Name"/>
        </div> }

        


        <div className="input">
            <img src={email_icon}  alt="" />
            <input type="email" placeholder="Email Id" />
        </div>


        <div className="input">
            <img src={password_icon}  alt="" />
            <input type="password" placeholder="Password" />
        </div>
      </div>
      {action==="Sign Up"?<div></div>:<div className="forgot-password"> Lost Password? <span>Click Here!</span></div>} 
      
      <div className="submit-container">
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
      </div>
      {error && <ErrorMessage message={error} />} 
    </div>
   );
};

export default Login;
