import React, { useState } from "react";
import "./nav.css";

export function Nav (props){
    return(
        <div className={`barra ${isBoxVisible ? "active" : ""}`}></div>
    )
}