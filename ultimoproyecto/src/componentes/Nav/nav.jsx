import React, { useState } from "react";
import "./nav.css";

export function Nav (props){
    return(
        <div className={`barra ${isBoxVisible ? "active" : ""}`}>
            <nav>
        <div className="titulo2-container">
            <h1 className="titulos-botones">{props.Infoh1}</h1>
        </div>
        <div className="icon-container" onClick={handleIconClick}>
          <img src={myImage} alt="Profile" className="icon" />
        </div>
      </nav>
        </div>
    )
}