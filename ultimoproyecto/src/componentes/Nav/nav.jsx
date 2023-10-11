import React, { useState } from "react";
import "./nav.css";

export function Nav (props){
    return (
        <div className="barra">
            <h1 className="text">{props.Infoh1}</h1>
        </div>
      );
}