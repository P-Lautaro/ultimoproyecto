import React, { useState } from "react";
import "./nav.css";

export function Nav (props){
    return (
        <div className="barra">
            <h1>{props.Infoh1}</h1>
        </div>
      );
}