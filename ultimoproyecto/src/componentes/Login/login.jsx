import React from 'react'
import './login.css'

import user_icon from '../Assets/person.png'
import password_icon from '../Assets/password.png'
import email_icon from '../Assets/email.png'

const login = () =>{
   return (
    <div className='container'>
        <div className="header">
            <div className="text">Sing Up</div>
            <div className="underline"></div>
        </div>
      <div className="inputs">
        <div className="input">
            <img src={user_icon} alt="" />
            <input type="user" />
        </div>
        <div className="input">
            <img src={email_icon}  alt="" />
            <input type="email" />
        </div>
        <div className="input">
            <img src={password_icon}  alt="" />
            <input type="password" />
        </div>
      </div>
      <div className="submit-container">
        <div className="submit">Sign Up</div>
        <div className="submit">Login</div>
      </div>
    </div>
   );
};

export default login;
