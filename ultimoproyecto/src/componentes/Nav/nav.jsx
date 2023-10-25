import React, { useState } from "react";
import "./nav.css";
import MyImage from "./epet20-PhotoRoom.png"
export function Nav (props){
    return (
        <div className="barra">
            <img src={MyImage}/>
            <h1 className="text">{props.Infoh1}</h1>
        </div>
      );
}